/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const moment = require('moment');

const create = async (req, res) => {
    try {
        const {
            name,
            lastName,
            email,
            password: passString,
            phone,
            carreer = '',
            type,
        } = req.allParams();
        const password = sails.helpers.encryptPassword.with({
            password: passString,
        });
        const { id } = await User.create({
            name,
            lastName,
            email,
            password,
            phone,
            carreer,
            type,
        }).fetch();
        const user = await User.findOne({ id });
        const token = sails.helpers.generateToken.with({
            id: user.id,
            email: user.email,
            login: moment().format(),
            key: sails.config.session.secret,
        });
        delete user.password;
        res.created({ user, token });
    } catch (err) {
        res.handle(err);
    }
};

module.exports = { create };
