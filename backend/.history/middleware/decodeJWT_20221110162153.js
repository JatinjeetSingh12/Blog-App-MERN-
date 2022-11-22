const jwt = require('jsonwebtoken');


const fetchUser = (req,res,next)=>{
    let token = req.header();
    if (!token) {
        if (!token) {
            res.status(401).send({ error: "please authenticate using a valid token" })
        }
    }
}