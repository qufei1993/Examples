const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  bookId: Number,
  name: String,
});

BookSchema.index({ bookId: 1}, { unique: true });

module.exports = BookSchema;