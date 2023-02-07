const router = require("express").Router();
const AdminController = require("../app/controllers/AdminController");

router.get('/project-manager', AdminController.projectManager);
router.get('/project-personnel-manager', AdminController.projectPersonnelManager);
router.get('/project-photo-manager', AdminController.projectPhotoManager);
router.post('/store-category-project', AdminController.createCategoryProject)
router.post('/store-project', AdminController.createProdject);
router.post('/delete-category-project', AdminController.deleteCategoryProject);
router.post('/delete-project', AdminController.deleteProject);
router.post('/edit-cate-project', AdminController.editCateProject)
router.get('/', AdminController.index);

module.exports = router;