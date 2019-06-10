const express = require('express');
const router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/api/items", itemController.findAll);

//router.post("/api/items", itemController.create);

module.exports = router;