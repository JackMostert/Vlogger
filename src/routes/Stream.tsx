import * as React from "react";
import Peer from "peerjs";
import { observer } from "mobx-react";
import { observable, action, runInAction } from "mobx";
import Video from "../components/Video/Video";
import MessagingChat from "@bit/j_mostert.react-components.messaging-chat";
import Axios from "axios";
import { TextField, PrimaryButton } from "@fluentui/react";

interface IStreamProps {
  route: any;
}

function create_UUID() {
  var dt = new Date().getTime();
  var uuid = "xxxxxxxxx4xxxxxxxxxxxxyxxxxxxxxx".replace(
    /[xy]/g,
    (c: any): any => {
      var r = (dt + Math.random() * 16) % 16 | 0;
      dt = Math.floor(dt / 16);
      return c == "x" ? r : (r & 0x3) | 0x8;
    }
  );
  return uuid;
}

let connected = false;

@observer
class Stream extends React.Component<any> {
  private onPeerConnetion = (conn: any) => {
    conn.on("data", this.onPeerData);
    this.conn.push(conn);
  };

  componentWillUnmount() {
    Axios.post("http://localhost:4000/removestreamer", {
      id: this.props.route.match.params.videoID,
    });
  }

  private conn: Array<any> = [];

  private videoRef: any = React.createRef<any>();

  private peer: any;

  private recordedBlobs: any[] = [];

  private mediaRecorder: any;

  @observable
  private chat: Array<any> = [];

  private stream: any;

  private connect = () => {
    if (connected) return;

    connected = true;

    this.peer = new Peer(this.props.route.match.params.videoID, {
      host: "localhost",
      port: 4000,
      path: "/peerjs/myapp",
    });

    this.peer.on("open", (id: any) => {
      console.log("Connected to server with ID of: " + id);
      Axios.post("http://localhost:4000/addstreamer", {
        id: this.props.route.match.params.videoID,
      });
    });

    this.peer.on("connection", function (c: any) {
      console.log("Connection");
    });

    this.peer.on("error", function (err: any) {
      console.log(err);
    });

    this.peer.on("connection", this.onPeerConnetion);

    const video: any = document.querySelector("#stream_video");

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          this.stream = stream;
          video.srcObject = stream;
        })
        .catch((err0r) => {
          console.log("Something went wrong!");
        });
    }
  };

  @action
  private onPeerData = (data: any) => {
    this.chat.push(data);
    for (const c of this.conn) {
      c.send(data);
    }
    this.forceUpdate();
  };

  @action
  private stop = () => {
    Axios.post("http://localhost:4000/removestreamer", {
      id: this.props.route.match.params.videoID,
    });
    this.peer = null;
    this.conn = [];
    this.chat = [];

    const video: any = document.querySelector("#stream_video");

    let stream = video.srcObject;
    let tracks;

    if (stream) {
      tracks = this.stream.getTracks();

      for (let i = 0; i < tracks.length; i++) {
        let track = tracks[i];
        track.stop();
      }
    }

    this.stream = undefined;
    video.srcObject = null;
  };

  @observable
  private message: string = "";

  @action
  private onPeerSendMsg = () => {
    if (this.conn && this.message) {
      let payload = {
        user: {
          name: "Jane Doe",
          url: "https://randomuser.me/api/portraits/men/41.jpg",
        },
        timestamp: Date.now(),
        message: this.message,
      };
      for (let i = 0; i < this.conn.length; i++) {
        const conn = this.conn[i];
        conn.send(payload);
      }
    }
  };

  private call = () => {
    this.peer.call("111", this.stream);
    this.startRecording();
  };

  private startRecording = () => {
    let options = { mimeType: "video/webm;codecs=vp9,opus" };
    if (!MediaRecorder.isTypeSupported(options.mimeType)) {
      console.error(`${options.mimeType} is not supported`);
      options = { mimeType: "video/webm;codecs=vp8,opus" };
      if (!MediaRecorder.isTypeSupported(options.mimeType)) {
        console.error(`${options.mimeType} is not supported`);
        options = { mimeType: "video/webm" };
        if (!MediaRecorder.isTypeSupported(options.mimeType)) {
          console.error(`${options.mimeType} is not supported`);
          options = { mimeType: "" };
        }
      }
    }

    try {
      this.mediaRecorder = new MediaRecorder(this.stream, options);
    } catch (e) {
      console.error("Exception while creating MediaRecorder:", e);
      return;
    }

    //
    this.mediaRecorder.onstop = (event: any) => {
      const blob = new Blob(this.recordedBlobs);
      let data = new FormData();
      data.append("file", blob, `${create_UUID()}.webm`);
      Axios.post("http://localhost:4000/video", data)
        .then((data) => {
          console.log(data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    this.mediaRecorder.ondataavailable = (event: any) => {
      console.log(event);
      if (event.data && event.data.size > 0) {
        this.recordedBlobs.push(event.data);
      }
    };
    this.mediaRecorder.start();
    console.log("RECORDING STARTED");
  };

  render() {
    return (
      <section className="page page-stream">
        <div className="video-holder">
          <Video
            src="https://www.youtube.com/embed/aZnEv7bu7b8"
            videoRef={this.videoRef}
            onStart={this.connect}
            onStop={this.stop}
          />
          <PrimaryButton
            text="Call"
            onClick={() => {
              this.call();
            }}
          />
          <MessagingChat messages={this.chat} theme="dark" />
          <TextField
            placeholder="Type..."
            onChange={(e, value) => {
              runInAction(() => {
                this.message = value || "";
              });
            }}
          />
          <PrimaryButton
            text="Primary"
            onClick={() => {
              runInAction(() => {
                this.chat.push({
                  user: {
                    name: "Jane Doe",
                    url: "https://randomuser.me/api/portraits/men/41.jpg",
                  },
                  timestamp: Date.now(),
                  message: this.message,
                });
              });
              this.onPeerSendMsg();
              this.forceUpdate();
            }}
          />
        </div>
        <canvas id="record" width={100} height={100}></canvas>
      </section>
    );
  }
}

export default Stream;
