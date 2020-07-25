const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URL, {
    dbName: process.env.DB_NAME,
});