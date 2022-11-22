var jwt = require('jsonwebtoken');

const fetchUser = () => {
    let token = req.header('auth-token');
    if (!token) {
        return 
    }
    const token = req.header("auth-token");
    if (!token) {
        res.status(401).send({ error: "please authenticate using a valid token" })
    }
}