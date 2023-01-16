const router = require("express").Router();
const NewController = require("../app/controllers/NewController");


router.get('/a',NewController.index );


// router.get('/detail',NewController.index);

module.exports = router;