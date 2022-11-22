var jwt = require('jsonwebtoken');

const fetchUser = () => {
    let token = req.header('auth-token');
    if (!token) {
        return login
    }
}