module.exports = {
    friendlyName: 'Filter params',

    description: 'Filters params to update a model',

    inputs: {
        params: {
            type: 'object',
            example: "{name: 'user.name', phone: 99999}",
            description: 'object with possible params',
            required: true,
        },
        keys: {
            type: 'array',
            example: "['name', 'lasteName', 'phone']",
            description: 'array with names of model attributes',
            required: true,
        },
    },

    exits: {
        success: {
            outputFriendlyName: 'Filtered params',
            outputDescription: 'Filtered params ready to update',
        },
    },

    fn: async function(params, keys, exits) {
        for (let i = 0; i < keys.length; i++) {
            if (!params[keys[i]]) {
                delete params[keys[i]];
            }
        }
        return exits.success({ ...params });
    },
};
