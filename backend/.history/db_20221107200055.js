const mongoose = require('mongoose');

const url = "mongodb://localhost:27017";

const mongoconnect = () => {
    mongoose.connect(url,()=>{
        console.log("mon")
    });
}


module.exports = mongoconnect;