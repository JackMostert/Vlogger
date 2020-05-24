const set = require("set-value");
const validator = require("validator");
const _ = require("lodash");
const moment = require("moment");

const DeepValidate = (body) =>
  new Promise((res, rej) => {
    _.map(body, (el, key) => {
      if (el.Value !== undefined)
        switch (el.Type.toLowerCase()) {
          case "uuid":
            if (!validate.uuid(el.Value)) {
              rej(errorMessage(el.Value, el.Type, key, "invalid uuid"));
            }
            break;
          case "string":
            if (!validate.string(el.Value)) {
              rej(errorMessage(el.Value, el.Type, key, "invalid string"));
            }
            break;
          case "number":
            if (!validate.number(el.Value)) {
              rej(errorMessage(el.Value, el.Type, key, "invalid number"));
            }
            break;
          case "date":
            if (!validate.date(el.Value)) {
              rej(errorMessage(el.Value, el.Type, key, "invalid date"));
            }
            break;
          case "email":
            if (!validate.email(el.Value)) {
              rej(errorMessage(el.Value, el.Type, key, "invalid email"));
            }
            break;
        }
    });
    res();
  });

const errorMessage = (value, type, field, message) => {
  return { Value: value, Type: type, Field: field, Message: message };
};

const validate = {
  uuid: (uuid) => {
    return !!validator.isUUID(uuid, [4]);
  },
  string: (string) => {
    return !validator.isEmpty(string);
  },
  number: (number) => {
    return !!validator.isNumeric(number);
  },
  date: (date) => {
    return !!moment(date).isValid();
  },
  email: (email) => {
    return !!validator.isEmail(email);
  },
};

module.exports = DeepValidate;
