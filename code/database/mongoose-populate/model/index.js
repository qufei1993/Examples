const mongoose = require('mongoose');
const AuthorSchema = require('./author');
const BookSchema = require('./book');

const DB_URL = process.env.DB_URL;
const AuthorModel = mongoose.model('Authors', AuthorSchema, 'authors');
const BookModel = mongoose.model('Books', BookSchema, 'books');

mongoose.set('useCreateIndex', true)
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {
  AuthorModel,
  BookModel,
}
