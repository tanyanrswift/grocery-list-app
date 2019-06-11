const request = require("request");
const server = require("../../index");
const base = "http://localhost:8000/users/";
const User = require("../../src/db/models").User;
const sequelize = require("../../src/db/models/index").sequelize;

describe("routes : users", () => {
    beforeEach((done) => {
        sequelize.sync({force: true})
        .then(() => {
            done();
        })
        .catch((err) => {
            console.log(err);
            done();
        });
    });

    describe("#create()", () => {
        it("should create a User object with a valid email and password", (done) => {
            User.create({
                email: "example@example.com",
                password: "password1"
            })
            .then((user) => {
                expect(user.email).toBe("example@example.com");
                expect(user.password).toBe("password1");
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });
    })
})