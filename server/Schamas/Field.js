const schema = require("schm");

const FieldRequired = schema({
  Value: {
    type: String,
    required: true,
  },
  //
  Type: {
    type: String,
    required: true,
  },
  //
  LastEdit: {
    type: Date,
    required: true,
  },
});

const FieldOptional = schema({
  Value: {
    type: String,
    required: false,
  },
  //
  Type: {
    type: String,
    required: false,
  },
  //
  LastEdit: {
    type: Date,
    required: false,
  },
});

const Field = {
  optional: FieldOptional,
  required: FieldRequired,
};

module.exports = Field;
