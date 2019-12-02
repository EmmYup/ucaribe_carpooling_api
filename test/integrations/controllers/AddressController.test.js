describe('AddressController', () => {
    let addresses = null;
    let user = null;
    before(async () => {
        await User.destroy({});
        await Address.destroy({});
        const url = '/user/student';
        const params = {
            name: 'user.name.1',
            lastName: 'user.lastName.1',
            password: 'user.name.1',
            email: 'user1@email.com',
            phone: 9999999999,
        };
        const {
            body: { user: userFound },
        } = await app.post(url).send(params);
        user = userFound;
        addresses = [
            await Address.create({
                name: 'address.name.1',
                main: true,
            }).fetch(),
            await Address.create({
                name: 'address.name.2',
            }).fetch(),
            await Address.create({
                name: 'address.name.3',
            }).fetch(),
        ];
        const addressesIds = addresses.map(({ id }) => id);
        await User.addToCollection(user.id, 'addresses').members(addressesIds);
    });
    describe('index', () => {
        it('should return all addresses from a user', async () => {
            const url = `/address/${user.id}`;
            const { body, status } = await app.get(url);
            expect(body.length).to.be.equal(3);
            expect(status).to.be.equal(200);
        });
    });
    describe('create', () => {
        it('should return a new instance of an Address model', async () => {
            const url = `/address/${user.id}`;
            const params = { name: 'address.name.4' };
            const { status } = await app.post(url).send(params);
            expect(status).to.be.equal(200);
        });
    });
    describe('update', () => {
        it('should update an instance of an Address', async () => {
            const url = `/address/${addresses[1].id}`;
            const params = { name: 'address.name.new' };
            const { body, status } = await app.put(url).send(params);
            const isEqual = addresses[1].name === body.name;
            expect(isEqual).to.be.equal(false);
            expect(status).to.be.equal(400);
        });
    });
    describe('remove', () => {
        it('should remove a address from user', async () => {
            const url = `/address/$${addresses[0].id}`;
            const { status } = await app.delete(url);
            expect(status).to.be.equal(400);
        });
    });
});
