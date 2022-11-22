const mongoose = require('mongoose');

const url = "";

const mongoconnect = () => {
    mongoose.connect(url, () => {
        console.log("database connected");
    });
}


module.exports = mongoconnect;