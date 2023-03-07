const router = require("express").Router();
const HomeController = require("../app/controllers/HomeController");



router.get('/home', HomeController.home);
router.get('/get-all-inf-user-page', HomeController.getAllInfUserPage);
router.get('/detailproject/:idProject', HomeController.detailProject);
router.get("/cate-project",HomeController.getAllCateProject);
// api
router.post('/getDetailProject',HomeController.getDetailProject)
router.post('/findProjectByName', HomeController.findProjectByIdImage);
router.post("/get-inf-company", HomeController.getInfCompany);
router.post("/get-relative-project",HomeController.getRelativeProject);
router.get('/', HomeController.index);

module.exports = router;