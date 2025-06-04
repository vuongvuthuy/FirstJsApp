const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnswerSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  contentMotherTongue: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  }
}, { _id: false });

const DynamicAnswerSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  answers: {
    type: [AnswerSchema],
    required: true
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now
  },
  filterCode: {
    type: String,
    required: true
  },
  index: {
    type: Number,
    required: true
  },
  motherTongueLanguage: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  version: {
    type: String,
    required: true
  }
}, {
  collection: 'DynamicAnswer' // This tells Mongoose to use the exact collection name
});

module.exports = mongoose.model('DynamicAnswer', DynamicAnswerSchema);
