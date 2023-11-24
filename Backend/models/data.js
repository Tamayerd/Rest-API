const mongoose = require("mongoose");

const DataItemSchema = new mongoose.Schema({
  scriptResult: {
    type: Object,
    required: true,
    
  },
  scriptError: {
    type: String,
    required: true,
  },
  modId: {
    type: String,
    required: true,
  },
});

const DataResponseSchema = new mongoose.Schema({
  response: {
    type: DataItemSchema,
    required: true,
  },
  messages: [
    {
      code: {
        type: String,
        required: true,
      },
      message: {
        type: String,
        required: true,
      },
    },
  ],
});

const DataModel = mongoose.model("Data", DataResponseSchema);

module.exports = DataModel;
