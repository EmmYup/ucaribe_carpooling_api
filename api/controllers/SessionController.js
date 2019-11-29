/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const moment = require('moment');

const login = async (req, res) => {
    try {
        const { email, password } = req.allParams();
        const user = await User.findOne({ email });

        if (!user) {
            const err = {
                err: {
                    message: 'User not found',
                },
                status: 404,
            };
            throw err;
        }

        const match = sails.helpers.compareHash.with({
            raw: password,
            encrypted: user.password,
        });

        if (!match) {
            const matchErr = {
                err: {
                    message: 'Values do not match',
                },
                status: 501,
            };
            throw matchErr;
        }

        const token = sails.helpers.generateToken.with({
            id: user.id,
            email: user.email,
            login: moment().format(),
            key: sails.config.session.secret,
        });

        delete user.password;
        res.success({ token, user });
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};

module.exports = { login };
