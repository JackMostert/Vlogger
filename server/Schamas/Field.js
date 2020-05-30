const schema = require("schm");

const Field = schema({
  value: {
    type: String,
    required: true,
  },
  //
  field_type: {
    type: String,
    required: true,
  },
  //
  created: {
    type: Date,
    required: true,
  },
  //
  last_updated: {
    type: Date,
    required: true,
  },
});

module.exports = Field;
