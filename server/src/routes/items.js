const express = require('express');
const router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/api/items", itemController.index);

router.post("/api/items/create", itemController.create);

module.exports = router;