const router = require("express").Router();
const AdminController = require("../app/controllers/AdminController");

router.get('/', AdminController.index);
router.get('/project-manager', AdminController.projectManager);
module.exports = router;