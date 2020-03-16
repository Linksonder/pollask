const mongoose = require('mongoose');

let roomSchema = new mongoose.Schema({
    subject: { type: String, required: true }
});

mongoose.model('Room', roomSchema);