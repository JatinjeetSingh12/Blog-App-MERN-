var jwt = require('jsonwebtoken');

const fetchUser = () => {
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
    try {
        
    } catch (error) {
        
    }
}