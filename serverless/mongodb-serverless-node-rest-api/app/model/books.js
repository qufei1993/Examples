const mongoose = require('mongoose');
const BooksSchema = new mongoose.Schema({
    name: String,
    id: { type: Number, index: true, unique: true },
    createdAt: { type: Date, default: Date.now },
});

// 注意 OverwriteModelError: Cannot overwrite `Books` model once compiled. 错误
module.exports = mongoose.models.Books || mongoose.model('Books', BooksSchema, process.env.DB_BOOKS_COLLECTION);