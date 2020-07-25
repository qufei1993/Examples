require('dotenv').config();
require('./model/db');

const BooksModel = require('./model/books');
const BooksController = require('./contrller/books');
const booksController = new BooksController(BooksModel);

module.exports = {
    create: event => booksController.create(event),

    update: event => booksController.update(event),

    find: () => booksController.find(),

    findOne: event => booksController.findOne(event),

    deleteOne: event => booksController.deleteOne(event),
}