const mongoose = require('mongoose');

let hasSchema = mongoose.models.Room != null;

if(!hasSchema) {
    let roomSchema = new mongoose.Schema({
        subject: { type: String, required: true },
        questions: [{
            question: { type: String, required: true},
            votes: { type: Number, default: 0 }
        }]
    });
    
    mongoose.model('Room', roomSchema);
} 

