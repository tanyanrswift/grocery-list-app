const express = require('express');
const router = express.Router();

const itemController = require("../controllers/itemController");

router.get("/api/items", itemController.index);
router.get("/api/items/edit", itemController.edit);
router.get("/api/items/:id", itemController.indexOne);

router.post("/api/items/create", itemController.create);
router.post("/api/items/:id/update", itemController.update);
router.post("/api/items/:id/delete", itemController.delete);

module.exports = router;