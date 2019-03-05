const bcrypt = require('bcrypt');

const connection = require('../database');
const jwt = require('../jwt');

const findUser = (username) => {
    const findUserQuery = `SELECT * FROM auth_database.user WHERE \`user_name\` = '${username}'`;
    return connection
        .query(findUserQuery)
        .then((result) => {
            if (result.length) return result[0];
            throw new Error();
        })
        .catch(() => {
            throw new Error('User Not Found');
        });
};

const verifyPassword = (password, user) => bcrypt
    .compare(password, user.password)
    .then((res) => {
        if (res) return user;
        throw new Error();
    })
    .catch(() => {
        throw new Error('wrongPassword');
    });

const login = (req, res) => {
    const { username, password } = req.body;
    return findUser(username)
        .then(user => verifyPassword(password, user))
        .then((user) => {
            const token = jwt.sign({ user });
            return res.status(200).send({ token, id: user.external_id });
        })
        .catch((error) => {
            if (error.message === 'wrongPassword') return res.sendStatus(400);
            return res.status(404).send(error.message);
        });
};

module.exports = login;
