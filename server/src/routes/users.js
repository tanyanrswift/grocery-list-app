const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");

//router.get("/api/users/signUp", userController.signUp);
//router.get("/api/users/signIn", userCotnroller.signInForm);
//router.get("/api/users/signOut", userController.signOut);

router.post("/users", userController.create);
//router.post("/users/signIn", userController.signIn);

module.exports = router;