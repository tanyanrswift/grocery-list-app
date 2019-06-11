const request = require("request");
const base = "http://localhost:8000/api/items";
const sequelize = require("../../src/db/models/index").sequelize;
const Item = require("../../src/db/models").Item;

describe("routes : items", () => {
    beforeEach((done) => {
        this.item;

        sequelize.sync({force: true}).then((res) => {
            Item.create({
                name: 'Cheese',
                purchased: false
            })
            .then((item) => {
                this.item = item;
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            })
        })
    })

    describe("POST /api/items/create", () => {
        it("should create a new item and redirect", (done) => {
            const options = {
                url: `${base}create`,
                form: {
                    name: 'Chocolate',
                    purchased: false
                }
            };

            request.post(options,
                (err, res, body) => {
                    Item.findOne({where: {name: 'Chocolate'}})
                    .then((item) => {
                        expect(item.name).toBe('Chocolate');
                        expect(item.purchased).toBe(false);
                        done();
                    })
                    .catch((err) => {
                        console.log(err);
                        done();
                    })
                }
            )
        })
    })
})