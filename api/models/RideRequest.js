/**
 * RideRequest.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
    attributes: {
        client: {
            model: 'User',
        },
        driver: {
            model: 'User',
        },
        destination: {
            type: 'string',
        },
        status: {
            type: 'string',
            enum: ['accepted', 'declined'],
        },
    },
};
