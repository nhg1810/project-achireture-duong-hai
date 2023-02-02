const router = require("express").Router();
const AdminController = require("../app/controllers/AdminController");

router.get('/', AdminController.index);
router.get('/project-manager', AdminController.projectManager);
router.get('/project-personnel-manager', AdminController.projectPersonnelManager);
router.get('/project-photo-manager', AdminController.projectPhotoManager);
module.exports = router;