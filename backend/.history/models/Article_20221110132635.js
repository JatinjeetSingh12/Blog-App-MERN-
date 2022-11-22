const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('user', UserSchema);


const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
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
    tag: {
        type: String,
        default: "genral"
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('notes', NotesSchema);