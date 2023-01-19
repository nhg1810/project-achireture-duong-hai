const router = require("express").Router();
const GoogleController = require("../app/controllers/GoogleControler");

router.get('/design-image/:fdid', GoogleController.getAllFileInFolder);
module.exports = router;