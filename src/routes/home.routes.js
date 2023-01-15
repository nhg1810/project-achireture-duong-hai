const router = require("express").Router();
const HomeController = require("../app/controllers/HomeController");

router.get('/', HomeController.index);


router.get('/home',HomeController.home);

module.exports = router;