const set = require("set-value");
const validator = require("validator");
const moment = require("moment");

const DeepValidate = (value) => {
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      if (value[key].value) {
        DeepValidate(value[key]);
      }

      if (Array.isArray(value[key])) {
        for (let i = 0; i < value[key].length; i++) {
          const element = value[key][i];
          DeepValidate(element);
        }
      }

      if (key === "field_type") {
        switch (value[key]) {
          case "date":
            if (!moment(value["value"]).isValid())
              throwError(value, `not a valid date`);
            break;
          case "uuid":
            if (validator.isUUID(value["value"], 4)) {
              break;
            } else {
              throwError(value, `not valid: ${value[key]}`);
            }
          case "number":
            if (validator.isNumeric(value["value"])) {
              const v = value["value"] + "";
              if (v !== "0" && v !== "1" && v !== "-1") {
                throwError(value, `value must be [1, 0, -1]`);
              } else {
                break;
              }
            } else {
              throwError(value, `not valid: ${value[key]}`);
            }
          case "string":
            value["value"];
            break;

          default:
            throw "field_type is invalid";
        }
      }
    }
  }
};

const throwError = (object, reason = "") => {
  const errorMessage = {
    value: object,
    reason: reason,
  };

  throw `${JSON.stringify(errorMessage, null, 2)}`;
};

module.exports = DeepValidate;
