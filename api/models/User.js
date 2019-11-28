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
            required: true,
        },
        carreer: {
            type: 'string',
        },
        type: {
            type: 'string',
            enum: ['student', 'driver'],
        },
        meetingPoint: {
            type: 'string',
            enum: [
                'biblioteca',
                'edificio de ingenierías',
                'edificio A',
                'edificio B',
                'edificio C',
                'edificio E',
            ],
        },
        file: {
            model: 'UploadedFile',
        },
        vehicle: {
            model: 'Vehicle',
        },
    },
};
