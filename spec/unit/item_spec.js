const sequelize = require("../../src/db/models/index").sequelize;
const Item = require("../../src/db/models").Item;

describe("Item", () => {
    beforeEach((done) => {
        this.item;

        sequelize.sync({force: true}).then((res) => {
            Item.create({
                name: 'Soda',
                purchased: false
            })
            .then((item) => {
                this.item = item;
                done();
            })
        })
    });

    describe('#create()', () => {
        it("should create an item and store it in the database", (done) => {
            Item.create({
                name: 'Soda',
                purchased: false
            })
            .then((item) => {
                expect(item.name).toBe("Soda");
                expect(item.purchased).toBe(false);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        });
    });
});