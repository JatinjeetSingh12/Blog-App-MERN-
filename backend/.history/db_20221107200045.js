const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";

const mongoconnect = () => {
    mongoose.connect(url,()=>{
        con
    });
}


module.exports = mongoconnect;