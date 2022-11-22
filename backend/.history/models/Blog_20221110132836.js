const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        default: "genral"
    },
    date: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('', NotesSchema);