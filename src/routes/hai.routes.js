const router = require("express").Router();
const HaiController = require("../app/controllers/HaiController");


router.get('/hai',HaiController.index );


// router.get('/detail',NewController.index);

module.exports = router;