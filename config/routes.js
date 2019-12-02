/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
    'get /': 'AppController.index',

    'post /user/:type': 'UserController.create',

    'post /login': 'SessionController.login',

    'post /vehicle/:userId': 'VehicleController.create',
    'get /vehicle/:id': 'VehicleController.show.',
    'put /vehicle/:id': 'VehicleController.update',

    'post /address/:userId': 'AddressController.create',
    'get /address/:userId': 'AddressController.index',
    'put /address/:id': 'AddressController.update',
    'delete /address/:id': 'AddressController.remove',
};
