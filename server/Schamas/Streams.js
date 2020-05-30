const schema = require("schm");
const Field = require("./Field");

class Streams {
  remove_stream_template = {
    stream_id: {},
  };

  join_stream_template = {
    id: {},
    stream_id: {},
    user_id: {},
  };

  new_stream_template = {
    id: {},
    stream_id: {},
    user_id: {},
    hearts: {},
    current_views: {},
    total_views: {},
    tags: [],
    title: {},
    discription: {},
    created: "",
  };

  new_stream_template_DEBUG = {
    id: {},
    stream_id: {},
    user_id: {},
    created: "",
  };

  join_stream_schema = schema({
    id: Field,
    stream_id: Field,
    user_id: Field,
  });

  remove_stream_schema = schema({
    stream_id: Field,
  });

  new_stream_schema = schema({
    id: Field,
    stream_id: Field,
    user_id: Field,
    hearts: Field,
    current_views: Field,
    total_views: Field,
    tags: [Field],
    title: Field,
    discription: Field,
    created: {
      type: Date,
      required: true,
    },
  });

  new_stream_schema_DEBUG = schema({
    id: Field,
    stream_id: Field,
    user_id: Field,
    created: {
      type: Date,
      required: true,
    },
  });
}

module.exports = new Streams();
