const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const serviceAccount = require("./doNotInclude/firebaseKey.json");
const { ExpressPeerServer } = require("peer");
const multer = require("multer");
const upload = multer();
const fs = require("fs");
const _ = require("lodash");
app.use(express.static(__dirname));

let usersStreaming = [];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://vlogger-990d6.firebaseio.com",
});

const server = app.listen(4000, (args) => {
  console.log("Server has started");
});

// let io = require("socket.io")(server);

const peerServer = ExpressPeerServer(server, {
  path: "/myapp",
  debug: true,
});

app.use("/peerjs", peerServer);

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});

app.post("/video", upload.any(), (req, res) => {
  fs.writeFile(
    __dirname + "/videos/" + req.files[0].originalname,
    req.files[0].buffer,
    (err) => {
      if (err) {
        console.log("Error: ", err);
        res.status(500).send("An error occurred: " + err.message);
      } else {
        res.status(200).send("ok");
      }
    }
  );
});

app.use(bodyParser.json());

//Users

app.post("debug", (req, res) => {
  res.send(req.body);
});

let interval;

// io.sockets.on("connection", (socket) => {
//   console.log("New client connected");
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(() => getApiAndEmit(socket), 1000);
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//     clearInterval(interval);
//   });
// });

const getApiAndEmit = (socket) => {
  fs.readdir(__dirname + "/videos/", (err, files) => {
    socket.emit("FromAPI", files);
  });
  socket.emit("users", usersStreaming);
};

app.get("/video/:id", function (req, res) {
  const path = `videos/${req.params.id}.webm`;
  const stat = fs.statSync(path);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(path, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(path).pipe(res);
  }
});

app.get("/allvideos", (req, res) => {
  fs.readdir(__dirname + "/videos/", (err, files) => {
    res.send(files);
  });
});

app.post("/addstreamer", (req, res) => {
  usersStreaming.push(req.body.id);
});

app.post("/removestreamer", (req, res) => {
  usersStreaming = _.filter(usersStreaming, (userID) => {
    return userID !== req.body.id;
  });
});
