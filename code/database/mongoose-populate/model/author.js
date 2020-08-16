const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  authorId: Number,
  name: String,
  bookIds: [{ type: Number, ref: 'Books' }]
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});
AuthorSchema.index({ authorId: 1}, { unique: true });

// AuthorSchema.set('toObject', { virtuals: true });
// AuthorSchema.set('toJSON', { virtuals: true });

AuthorSchema.virtual('bookList', {
  ref: 'Books',
  localField: 'bookIds',
  foreignField: 'bookId',
  justOne: false
});

AuthorSchema.virtual('bookListCount', {
  ref: 'Books',
  localField: 'bookIds',
  foreignField: 'bookId',
  count: true
});

module.exports = AuthorSchema;
