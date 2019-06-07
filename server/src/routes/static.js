const express = require("express");
const router = express.Router();
const staticController = require('../controller/staticController');

router.get("/", staticController.index);

module.exports = router;