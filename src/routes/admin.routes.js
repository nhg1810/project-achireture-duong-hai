const router = require("express").Router();
const AdminController = require("../app/controllers/AdminController");

router.get('/project-manager', AdminController.projectManager);
router.post('/store-category-project' , AdminController.createCategoryProject)
router.post('/store-project', AdminController.createProdject);
router.get('/', AdminController.index);

module.exports = router;