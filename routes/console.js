const express = require("express");
const router = express.Router();
const consoleController = require("../controllers/console");

router.post("/pLanguage", consoleController.postPLanguage);
router.post("/fLanguage", consoleController.postFLanguage);

module.exports = router;