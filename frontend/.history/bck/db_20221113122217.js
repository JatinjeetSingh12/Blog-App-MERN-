const mongoose = require('mongoose');

const url = "mongodb://localhost:";

const mongoconnect = () => {
    mongoose.connect(url, () => {
        console.log("database connected");
    });
}


module.exports = mongoconnect;