describe('AppController', () => {
    describe('index', () => {
        it('should return a valid response', async () => {
            const url = '/';
            const { status } = await app.get(url);
            expect(status).to.equal(200);
        });
    });
});
