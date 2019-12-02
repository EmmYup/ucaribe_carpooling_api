/**
 * AddressController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const index = async (req, res) => {
    try {
        const id = req.param('userId');
        const { addresses } = await User.findOne({ id }).populate('addresses');
        res.ok(addresses);
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};

const create = async (req, res) => {
    try {
        const id = req.param('userId');
        const { name, main } = req.allParams();
        const { addressId } = await Address.create({ name, main }).fetch();
        await User.addToCollection({ id }, 'addresses').members([addressId]);
        const createdAddress = await Address.findOne({ id: addressId });
        res.created(createdAddress);
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};

const update = async (req, res) => {
    try {
        const id = req.param('id');
        const { name, main } = req.allParams();
        const paramsNamesArr = ['name', 'main'];
        const params = await sails.helpers.filterParams.with({
            params: { name, main },
            keys: paramsNamesArr,
        });
        const updatedAddress = await Address.update({ id })
            .set({ ...params })
            .fetch();
        res.success(updatedAddress);
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};

const remove = async (req, res) => {
    try {
        const id = req.param('id');
        const removedAddress = await Address.destroyOne({ id });
        res.success(removedAddress);
    } catch (er) {
        const { err: e, status } = er;
        res.handle({ err: e, status });
    }
};
module.exports = {
    index,
    create,
    update,
    remove,
};
