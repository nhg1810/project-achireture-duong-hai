const router = require("express").Router();
const HomeController = require("../app/controllers/HomeController");



router.get('/home', HomeController.home);
router.get('/get-all-inf-user-page', HomeController.getAllInfUserPage);
router.get('/detailproject/:idProject', HomeController.detailProject);
// api
router.post('/getDetailProject',HomeController.getDetailProject)
router.post('/findProjectByName', HomeController.findProjectByIdImage);
router.get('/', HomeController.index);

module.exports = router;