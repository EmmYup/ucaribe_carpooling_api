module.exports = {
    friendlyName: 'Hash password',

    description: '',

    inputs: {},

    exits: {
        success: {
            description: 'All done.',
        },
    },

    fn: async function(inputs) {
        // All done.
        return exits.success();
    },
};
