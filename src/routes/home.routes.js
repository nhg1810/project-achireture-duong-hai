const router = require("express").Router();
const HomeController = require("../app/controllers/HomeController");



router.get('/home', HomeController.home);
router.get('/get-all-inf-user-page', HomeController.getAllInfUserPage);
router.get('/detailproject/:idProject', HomeController.detailProject);
router.get("/cate-project",HomeController.getAllCateProject);
router.get("/people",HomeController.getPeople);
// api
router.post('/getDetailProject',HomeController.getDetailProject)
router.post('/findProjectByName', HomeController.findProjectByIdImage);
router.post("/get-inf-company", HomeController.getInfCompany);
router.post("/get-relative-project",HomeController.getRelativeProject);
router.get('/all-cate-project',HomeController.getCateProject);
router.get('/get-all-personal',HomeController.getAllPersonal);
router.get('/', HomeController.index);

module.exports = router;