const dotenv = require('dotenv');

module.exports.bootstrap = async function(done) {
    dotenv.config();
    return done();
};
