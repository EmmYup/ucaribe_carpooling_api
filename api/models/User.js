/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string',
        },
        lastName: {
            type: 'string',
        },
        email: {
            type: 'string',
            unique: true,
            required: true,
        },
        password: {
            type: 'string',
            required: true,
        },
        phone: {
            type: 'number',
        },
        carreer: {
            type: 'string',
        },
        type: {
            type: 'string',
            enum: ['student', 'driver'],
        },
        file: {
            model: 'file',
        },
        vehicle: {
            model: 'vehicle',
        },
    },
};
