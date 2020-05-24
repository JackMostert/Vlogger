const set = require("set-value");
const { v4: uuidv4 } = require("uuid");
const schema = require("schm");
const User = require("./Schamas/Users");
const { validate } = schema;
const DeepValidate = require("./DeepValidate");
const moment = require("moment");
const _ = require("lodash");
const validator = require("validator");
const Comments = require("./Schamas/Comments");

const generateField = (value, type) => {
  if (!type) return {};

  type = type.toLowerCase();

  if (type === "string") {
    value = validator.escape(value.trim());
  }
  if (type === "email") {
    value = validator.normalizeEmail(value);
  }

  return {
    Value: value,
    Type: type,
    LastEdit: moment().format(),
  };
};

const checkRequest = (res, body, TEMPLATE, SCHEMA) => {
  if (!TEMPLATE || !SCHEMA) {
    res.send("INVALID REQUEST");
    return;
  }

  if (!validator.isJSON(JSON.stringify(body))) {
    res.send("INVALID REQUEST");
    return;
  }
};

const bodyValidator = (req, res, next) => {
  const schemaType = req.body.schema;
  const tempBody = req.body.data;

  let TEMPLATE;
  let SCHEMA;

  if (schemaType.toLowerCase() === "new_user") {
    TEMPLATE = User.TEMPLATES.NEW;
    SCHEMA = User.SCHEMA.NEW;
  }
  if (schemaType.toLowerCase() === "update_user") {
    TEMPLATE = User.TEMPLATES.UPDATE;
    SCHEMA = User.SCHEMA.UPDATE;
  }
  if (schemaType.toLowerCase() === "new_comment") {
    TEMPLATE = Comments.TEMPLATES.NEW;
    SCHEMA = Comments.SCHEMA.NEW;
  }

  checkRequest(res, tempBody, TEMPLATE, SCHEMA);

  let body = { ...TEMPLATE, ...req.body.data };

  _.map(TEMPLATE, (el, key) => {
    let value;
    let type;

    switch (key) {
      case "ID":
        value = uuidv4();
        type = "uuid";
        break;
      case "DateCreated":
        value = moment().format();
        type = "date";
        break;
      case "LastEdit":
        value = moment().format();
        type = "date";
        break;
      default:
        value = body[key].Value;
        type = body[key].Type;
        break;
    }

    set(body, key, generateField(value, type));
  });

  validate(body, SCHEMA)
    .then((cleanBody) => {
      let cleanStructure = SCHEMA.parse(cleanBody);
      DeepValidate(cleanStructure)
        .then(() => {
          req.body = cleanStructure;
          next();
        })
        .catch((msg) => {
          res.json(msg);
        });
    })
    .catch((errors) => {
      res.send(errors);
    });
};

module.exports = bodyValidator;
