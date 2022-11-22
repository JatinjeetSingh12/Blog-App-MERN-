const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";

const mongoconnect = () => {
    mongoose.connect(url, () => {
        console.log("database connected");
    });
}


module.exports = mongoconnect;

// pak vs eng
// pak vs ind
