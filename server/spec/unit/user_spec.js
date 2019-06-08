const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("User", () => {
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
        it("should create a User object with a valid username, email, and password", (done) => {
            User.create({
                username: "example123",
                email: "example@example.com",
                password: "password1"
            })
            .then((user) => {
                expect(user.username).toBe("example123")
                expect(user.email).toBe("example@example.com");
                expect(user.id).toBe(1);
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });

        it("should not create a user with a username or email already taken", (done) => {
            User.create({
                username: "example123",
                email: "example@example.com",
                password: "password1"
            })
            .then((user) => {
                User.create({
                    username: "example",
                    email: "example@example.com",
                    password: "passwordsstink"
                })
                .then((user) => {
                    done();
                })
                .catch((err) => {
                    console.log(err);
                    done();
                });
                done();
            })
            .catch((err) => {
                console.log(err);
                done();
            });
        });
    });
});