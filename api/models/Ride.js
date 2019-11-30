/**
 * Ride.js
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
        meetingPoint: {
            type: 'string',
        },
        meetingTime: {
            type: 'string',
            columnType: 'datetime',
        },
        status: {
            type: 'string',
            enum: ['stayed', 'inProcess', 'finished'],
        },
    },
};
