const Account = require('../models/Account');
const jwt = require("jsonwebtoken");
require('dotenv').config()
class AuthService {
    async login() {
        let token = jwt.sign({ foo: 'bar' }, process.env.SECRET_ACCESS_TOKEN);
    }

    async register() {

    }
}

module.exports = AuthService;