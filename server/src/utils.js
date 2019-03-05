const jwt = require('./jwt');

const validate = (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if (token) {
            const { user } = jwt.verify(token);
            const { user_name: username, partner, external_id: userId } = user;
            req.user = {
                username,
                partner,
                userId,
            };
            return next();
        }
        throw new Error('No token provided.');
    } catch ({ message }) {
        if (message === 'jwt expired') {
            res.status(401);
        } else {
            res.status(403);
        }
        return res.send({ auth: false, message });
    }
};

module.exports = {
    validate,
};
