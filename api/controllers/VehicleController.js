/**
 * VehicleController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const create = async (req, res) => {
    try {
        const userId = req.param('userId');
        const { licensePlate, model, color } = req.allParams();
        const { id } = await Vehicle.create({
            licensePlate,
            model,
            color,
            user: userId,
        }).fetch();
        await User.update({ id: userId }).set({ vechile: id });
        const vehicle = await Vehicle.findOne({ id }).populate('user');
        res.created(vehicle);
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};

const show = async (req, res) => {
    try {
        const id = req.params('id');
        const vehicle = await Vehicle.findOne({ id }).populate('user');
        res.success(vehicle);
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};

const update = async (req, res) => {
    try {
        const id = req.param('id');
        const { licensePlate, model, color, user } = req.allParams();
        const paramsNamesArr = ['licensePlate', 'model', 'color', 'user'];
        const params = await sails.helpers.filterParams.with({
            params: { licensePlate, model, color, user },
            keys: paramsNamesArr,
        });
        const updatedVehicle = await Vehicle.update({ id })
            .set({ ...params })
            .fetch();
        res.success(updatedVehicle);
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};

module.exports = {
    create,
    show,
    update,
};
