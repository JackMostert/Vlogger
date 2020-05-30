const set = require("set-value");
const Streams = require("./Schamas/Streams");
const { v4: uuidv4 } = require("uuid");
const schema = require("schm");
const { validate } = schema;
const moment = require("moment");
const DeepValidate = require("./DeepValidate");

const bodyValidator = (req, res, next) => {
  const now = moment();
  const schemaType = req.body.schema;
  let SCHEMA_TEMPLATE;
  let SCHEMA;
  let LIBRARY;

  if (schemaType.toLowerCase() === "remove_stream") {
    SCHEMA_TEMPLATE = "remove_stream_template";
    SCHEMA = "remove_stream_schema";
    LIBRARY = Streams;
  }
  if (schemaType.toLowerCase() === "join_peer") {
    SCHEMA_TEMPLATE = "join_peer_template_DEBUG";
    SCHEMA = "join_peer_schema_DEBUG";
    LIBRARY = Streams;
  }
  if (schemaType.toLowerCase() === "new_stream") {
    SCHEMA_TEMPLATE = "new_stream_template";
    SCHEMA = "new_stream_schema";
    LIBRARY = Streams;
  }
  if (schemaType.toLowerCase() === "new_stream_debug") {
    SCHEMA_TEMPLATE = "new_stream_template_DEBUG";
    SCHEMA = "new_stream_schema_DEBUG";
    LIBRARY = Streams;
  }
  if (schemaType.toLowerCase() === "join_stream") {
    SCHEMA_TEMPLATE = "join_stream_template";
    SCHEMA = "join_stream_schema";
    LIBRARY = Streams;
  }

  const emptyDataSet = LIBRARY[SCHEMA_TEMPLATE];
  let filledData = { ...emptyDataSet, ...req.body.data };

  set(filledData, `created`, now);

  for (const key in filledData) {
    if (filledData.hasOwnProperty(key)) {
      if (key === "id") {
        set(filledData, `${key}.value`, uuidv4());
        set(filledData, `${key}.field_type`, "uuid");
      } else if (key === "stream_id") {
        // set(filledData, `${key}.value`, uuidv4());
        // set(filledData, `${key}.field_type`, "uuid");
      }

      if (key === "tags") {
        for (let i = 0; i < filledData[key].length; i++) {
          set(filledData, `${key}.${i}.created`, now);
          set(filledData, `${key}.${i}.last_updated`, now);
        }
      } else {
        set(filledData, `${key}.created`, now);
        set(filledData, `${key}.last_updated`, now);
      }
    }
  }

  validate(filledData, LIBRARY[SCHEMA])
    .then((returnedData) => {
      let cleanStructure = LIBRARY[SCHEMA].parse(returnedData);
      try {
        DeepValidate(cleanStructure);
        req.body = cleanStructure;
        next();
      } catch (error) {
        res.send(error);
      }
    })
    .catch((errors) => res.send(errors));
};

module.exports = bodyValidator;
