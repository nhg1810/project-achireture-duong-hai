const router = require("express").Router();
const AdminController = require("../app/controllers/AdminController");
const multer = require("multer");
const process = require('process');
const upload = multer({ dest: `${process.cwd()}` + `/src/public/img-personal` });

router.get('/project-manager', AdminController.projectManager);
router.get('/project-personnel-manager', AdminController.projectPersonnelManager);
router.get('/project-photo-manager', AdminController.projectPhotoManager);
router.get('/mana-inf-home-user', AdminController.manaInfHomeUser);
router.get('/infor-company', AdminController.inforCompany)

//api data
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
router.post('/bulk-upload-design', AdminController.bulkUploadDesign);
router.get('/get-inf-company', AdminController.getAllInfCompany);
//add a cate of personal
router.post('/add-cate-personal', AdminController.addCatePersonal);
//get all role of personal
router.get('/get-all-role-personal', AdminController.getAllRolePersonal);
//detele role personal
router.post('/delete-role-personal', AdminController.deleteRole);
//update logo company
router.post('/update-inf-company', AdminController.updateInfCompany);

//add personal inf
router.post('/add-personal-inf', upload.single("files"), AdminController.addPersonalInf);
//get all personal
router.get('/get-all-personal', AdminController.getAllPersonalInf);
//delete personal
router.post('/delete-personal', AdminController.delPersonalById);
//get personal by roles
router.post('/getPersonalByRole', AdminController.getPersonalByRule);

//get all information of user page
router.get('/all-inf-user-page', AdminController.getAllInformationUserPage);
//update inf home page use
router.post('/update-inf-home-page', AdminController.updateInfHomePge);
// router.get('/create-inf', AdminController.createInf);
router.get('/', AdminController.projectManager);



module.exports = router;