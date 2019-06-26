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

    describe("POST /api/items/:id/update", () => {
        it("should update the item with the given values", (done) => {
            const options = {
                url: `${base}${this.item.id}/update`,
                form: {
                    name: 'Candy',
                    purchased: false
                }
            }
            request.post(options, 
                (err, res, body) => {
                    Item.findOne({
                        where: { id: this.item.id }
                    })
                    .then((item) => {
                        expect(item.name).toBe("Candy");
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

    describe("POST /api/items/:id/delete", () => {
        it("should delete the item with the associated id", (done) => {
            Item.findAll()
            .then((items) => {
                const count = items.length;
                expect(count).toBe(1);

                request.post(`${base}${this.item.id}/delete`, (err, res,
                    Item.findAll()
                    .then((items) => {
                        expect(err).toBeNull();
                        expect(items.length).toBe(count - 1);
                        done();
                    })
                    .catch((err) => {
                        console.log(err);
                        done();
                    })
                ))
            })
        })
    })
})