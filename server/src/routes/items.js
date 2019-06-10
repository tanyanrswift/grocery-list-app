const express = require('express');
const router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/api/items", itemController.showAll);

router.post("/api/items", itemController.create);
//router.post("/api/items/update", itemController.update);

module.exports = router;