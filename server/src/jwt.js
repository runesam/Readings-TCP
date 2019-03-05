const jwt = require('jsonwebtoken');

class Jwt {
    constructor() {
        this.secret = 'expressSecret';
        this.expiresIn = '5m';
    }

    sign(data) {
        return jwt.sign(data, this.secret, { expiresIn: this.expiresIn });
    }

    verify(token) {
        return jwt.verify(token, this.secret);
    }
}

module.exports = new Jwt();
