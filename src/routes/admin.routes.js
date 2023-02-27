const router = require("express").Router();
const AdminController = require("../app/controllers/AdminController");

router.get('/project-manager', AdminController.projectManager);
router.get('/project-personnel-manager', AdminController.projectPersonnelManager);
router.get('/project-photo-manager', AdminController.projectPhotoManager);
router.post('/store-category-project', AdminController.createCategoryProject)
router.post('/store-project', AdminController.createProdject);
router.post('/delete-category-project', AdminController.deleteCategoryProject);
router.post('/delete-project', AdminController.deleteProject);
router.post('/edit-cate-project', AdminController.editCateProject);
router.post('/edit-project', AdminController.editProject);
router.post('/detail-project', AdminController.detailProject);
router.get('/all-image-project', AdminController.allDesignProject);
router.get('/get-all-project', AdminController.getAllProject);
router.get('/get-all-cate-project', AdminController.getAllCateProject);
router.post('/get-project-by-name', AdminController.getProjectByName);
router.post('/get-cate-project-by-name-cate', AdminController.getCateProjectByName);
router.post('/get-project-by-id-cate', AdminController.getProjectByCate);
router.get('/', AdminController.projectManager);

module.exports = router;