const Course = require('../model/EntityModel');
const logger = require('../constants/loggerConstant');
const projectManagerService = require('../services/projectManager.service');
const formidable = require('formidable');
const path = require('path');
const sharp = require("sharp")
const fs = require('fs');

const ID_FOLDER_DESIGN = process.env.ID_FOLDER_DESIGN;



//helper
const curdHelper = require('../helpers/crud');
const CateProject = require('../model/CateProject');
const Project = require('../model/ProjectModel');
const RoleModel = require('../model/RoleModel');
const AccountModel = require('../model/AccountModel');
class AdminController {
    async index(request, response, next) {
        let res = await projectManagerService.test(request);
        console.log(res);
        if (res == 'error') {
            response.send("error");
        } else {
            response.render('admin-login', { layout: 'layout-login.hbs' })
        }
    }

    async projectManager(request, response, next) {
        const res = await projectManagerService.getAllFileInFolder(request);
        const all_cate_prod = await projectManagerService.allCateProject(request);
        const all_prod = await projectManagerService.getAllProject(request);
        if (all_prod == 'error' || all_cate_prod == 'error') {
            // console.log(all_prod);
            console.log(all_cate_prod);
            return await response.send("error123");
        } else {
            return await response.render('project-manager', {
                imageDesign: res,
                all_cate_prod: all_cate_prod,
                all_prod: all_prod
            });
            // const result = await all_cate_prod.find((item) => item._id === "63e202e2ed66b1f4c2f57d5b");
            // response.send(all_cate_prod);
            // response.send(all_prod)

        }
    }

    async createCategoryProject(request, response, next) {
        // response.json(request.body);
        let res = await projectManagerService.addCateject(request);
        if (res == "success") {
            response.setHeader("Content-Type", "text/json");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.json('success')
        }
    }

    async createProdject(request, response, next) {
        console.log(request.body)
        let res = await projectManagerService.addProject(request);
        // console.log(res);

        if (res == "success") {
            response.setHeader("Content-Type", "text/json");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.json('success')
        } else {
            // console.log(res)
            response.send("thất bại")
        }
    }

    async projectPersonnelManager(request, response, next) {
        response.render('project-personnel-manager')
    }

    async projectPhotoManager(request, response, next) {
        response.render('project-photo-manager')
    }

    async deleteCategoryProject(request, response, next) {
        CateProject.deleteOne(request.body).then(() => {
            response.setHeader("Content-Type", "text/json");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.json('success')
        }).catch(function () {

        })
    }

    async deleteProject(request, response, next) {
        Project.deleteOne(request.body).then(() => {
            response.setHeader("Content-Type", "text/json");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.json('success')
        }).catch(function () {

        })
    }
    async editCateProject(request, response, next) {
        let res = await projectManagerService.updateCateProject(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        if (res == "success") {
            response.json('success')
        } else {
            // console.log(res)
            console.log(res)
        }
    }
    async detailProject(request, response, next) {
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        let res = await projectManagerService.getOneProject(request.body._id);
        response.json(res);
    }
    async editProject(request, response, next) {
        let res = await projectManagerService.updateProject(request);
        console.log(res);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        if (res == "success") {
            response.json('success')
        } else {
            // console.log(res)
            console.log(res)
        }
    }
    async allDesignProject(request, response, next) {
        const res = await projectManagerService.getAllFileInFolder(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        if (res != 'error') {
            response.json(res)
        } else {
            // console.log(res)
            console.log(res)
        }
    }
    async getAllProject(request, response, next) {
        const res = await projectManagerService.getAllProject(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        if (res != 'error') {
            response.json(res)
        } else {
            // console.log(res)
            console.log(res)
        }
    }
    async getAllCateProject(request, response, next) {
        const res = await projectManagerService.allCateProject(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        if (res != 'error') {
            response.json(res)
        } else {
            // console.log(res)
            console.log(res)
        }
    }
    async getProjectByName(request, response, next) {
        const res = await projectManagerService.liveSearchProject(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res)
    }
    async getCateProjectByName(request, response, next) {
        const res = await projectManagerService.liveSearchCateProject(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res)
        console.log(res);
    }
    async getProjectByCate(request, response, next) {
        const res = await projectManagerService.checkProjectInCate(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res)
    }
    async login(request, response, next) {
        response.render('admin-login', { layout: 'layout-login.hbs' })
        // const res = await projectManagerService.checkLogin(request);
        // response.setHeader("Content-Type", "text/json");
        // response.setHeader("Access-Control-Allow-Origin", "*");
        // console.log(res);

        // response.json(res);
    }
    //manage inf home page use
    async manaInfHomeUser(request, response, next) {
        response.render('project-home-inf')
    }

    async getAllInformationUserPage(request, response, next) {
        const res = await projectManagerService.getAllInformationUserPage(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res)
    }
    // async createInf(request, response, next) {
    //     const res = await projectManagerService.createINFHomePage(request);
    //     console.log(res);
    // }

    async updateInfHomePge(request, response, next) {
        const res = await projectManagerService.updateInfHomePage(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res);
    }
    async bulkUploadDesign(request, response, next) {
        var formdata = formidable({ multiples: true });
        const uploadFolder = path.join(__dirname, "./uploads");
        formdata.uploadDir = uploadFolder;
        formdata.multiples = true;
        formdata.maxFileSize = 50 * 1024 * 1024; // 5MB
        formdata.keepExtensions = true;
        formdata.parse(request, async (err, fields, files) => {
            if (err) {
                console.log(err)
                return;
            }
            var arrOfFiles = []
            arrOfFiles = files.file;
            console.log(arrOfFiles)

            if (arrOfFiles.length) {
                console.log(arrOfFiles.length)
                await arrOfFiles.map((each) => {
                    console.log(each.filepath)
                    sharp(each.filepath)
                        .webp()
                        .toFile(__dirname + '/convert-upload/' + each.newFilename + '.webp')
                        .then(function (info) {
                            console.log(info)
                        }).then(async () => {
                            //name file upload
                            const res = await projectManagerService.upLoadFileDrive(each.newFilename);
                            if (res) {
                                setTimeout(function () {
                                    fs.unlink(__dirname + '/convert-upload/' + res.namePhoto + '.webp', function (err) {
                                        if (err) throw err;
                                        console.log('File deleted!');
                                    });
                                }, 3000)

                                setTimeout(function () {
                                    fs.unlink(__dirname + '/uploads/' + res.namePhoto, function (err) {
                                        if (err) throw err;
                                        console.log('File deleted!');
                                    });
                                }, 3000)
                                return res;
                            }
                        })
                        .catch(function (err) {
                            console.log(err)
                        })

                });
                response.redirect('/admin/project-photo-manager');

            } else {
                console.log(files.file.filepath)
                sharp(files.file.filepath)
                    .webp()
                    .toFile(__dirname + '/convert-upload/' + files.file.newFilename + '.webp')
                    .then(function (info) {
                        console.log(info)
                    }).then(async () => {
                        const res = await projectManagerService.upLoadFileDrive(files.file.newFilename);
                        if (res) {
                            setTimeout(function () {
                                console.log(__dirname);
                                fs.unlink(__dirname + '/convert-upload/' + res.namePhoto + '.webp', function (err) {
                                    if (err) throw err;
                                    console.log('File deleted!');
                                });
                            }, 3000)

                            setTimeout(function () {
                                fs.unlink(__dirname + '/uploads/' + res.namePhoto, function (err) {
                                    if (err) throw err;
                                    console.log('File deleted!');
                                });
                            }, 3000)
                            return res;
                        }
                    }).then((data) => {
                        if (data) {
                            response.redirect('/admin/project-photo-manager');
                        }
                    })
                    .catch(function (err) {
                        console.log(err)
                    })
            }
        });

        // console.log('123', request.body);
        // response.setHeader("Content-Type", "text/json");
        // response.setHeader("Access-Control-Allow-Origin", "*");
        // response.json(request.body);
    }

    async inforCompany(request, response, next) {
        response.render('project-company-manager')
    }
    async getAllInfCompany(request, response, next) {
        const res = await projectManagerService.getInfCompany('64061f7b8a4398c824dbf196');
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res);
    }
    async updateInfCompany(request, response, next) {
        const res = await projectManagerService.updateCompany(request);
        console.log(res)
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        // console.log(res)
        response.json(res);
    }
    async addCatePersonal(request, response, next) {
        const res = await projectManagerService.addCatePersonal(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        // console.log(request.body)
        response.json(res);
    }
    async getAllRolePersonal(request, response, next) {
        const res = await projectManagerService.getAllRolePersonal(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        // console.log(res)
        response.json(res);
    }
    async deleteRole(request, response, next) {
        // console.log(12312312,request.body.idRole)
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        RoleModel.deleteOne(request.body.idRole).then(() => {

            response.json('success')
        }).catch(function (e) {
            response.json(e);
        })
    }
    async getAllPersonalInf(request, response, next) {
        const res = await projectManagerService.getAllPersonalInf(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res);

    }
    async addPersonalInf(request, response, next) {
        sharp(request.file.path)
            .webp()
            .toFile(`${process.cwd()}` + `/src/public/img-personal/` + request.file.filename + '.webp')
            .then(async (data) => {
                if (data) {
                    let obj = {
                        name: request.body.name_personal,
                        birth: request.body.birth_personal,
                        email: request.body.email_personal,
                        role: request.body.cate_personal,
                        address: request.body.address_personal,
                        contact: request.body.contact_personal,
                        byMySelf: request.body.descript_personal,
                        imageAvata: `img-personal/` + request.file.filename + '.webp'
                    };
                    //save in db
                    const res = await projectManagerService.addPersonalInf(obj);
                    if (res == 'success') {
                        response.redirect('/admin/project-personnel-manager');
                    }
                }
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    async delPersonalById(request, response, next) {
        AccountModel.deleteOne(request.body).then(() => {
            response.setHeader("Content-Type", "text/json");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.json('success')
        }).catch(function () {

        })
    }
    async getPersonalByRule(request, response, next) {
        const res = await projectManagerService.getPersonalById(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res);
        // console.log(res)

    }
    async getPersonalById(request, response, next) {
        const res = await projectManagerService.getPersonalByIdPersonal(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res);
        // console.log(res)
    }
    //edit personal
    async editPersonalById(request, response, next) {
        sharp(request.file.path)
            .webp()
            .toFile(`${process.cwd()}` + `/src/public/img-personal/` + request.file.filename + '.webp')
            .then(async (data) => {
                if (data) {
                    let id = request.body.id_personal;
                    let obj = {
                        name: request.body.vl_name_personal,
                        birth: request.body.vl_birth_personal,
                        email: request.body.vl_email_personal,
                        role: request.body.vl_role_personal,
                        address: request.body.vl_address_personal,
                        contact: request.body.vl_phone_personal,
                        byMySelf: request.body.vl_descript_personal,
                        imageAvata: `img-personal/` + request.file.filename + '.webp'
                    };
                    //save in db
                    const res = await projectManagerService.editPersonalById(obj, id);
                    if (res == 'success') {
                        response.redirect('/admin/project-personnel-manager');
                    } else {
                        console.log('res', res);
                    }
                }
            })
            .catch(function (err) {
                console.log(err)
            })

        console.log(request.file, request.body)
    }
    //edit personal no img
    async editPersonalByIdNoAvata(request, response, next) {
        // console.log(request.body);
        let id = request.body.id_personal;
        let obj = {
            name: request.body.vl_name_personal,
            birth: request.body.vl_birth_personal,
            email: request.body.vl_email_personal,
            role: request.body.vl_role_personal,
            address: request.body.vl_address_personal,
            contact: request.body.vl_phone_personal,
            byMySelf: request.body.vl_descript_personal,
        };
        console.log('id', id);
        console.log('obj', obj);
        const res = await projectManagerService.editPersonalById(obj, id);
        if (res == 'success') {
            response.redirect('/admin/project-personnel-manager');
        } else {
            console.log('res', res);
        }
    }

    async inforProject(request, response, next) {
        response.render('project-descript-manager')
    }
    async editBannerCate(request, response, next) {
        sharp(request.file.path)
            .webp()
            .toFile(`${process.cwd()}` + `/src/public/banner-cate/` + request.file.filename + '.webp')
            .then(async (data) => {
                if (data) {
                    let id = request.body.idCateProject;
                    let obj = {
                        imageBanner: `banner-cate/` + request.file.filename + '.webp'
                    };
                    //save in db
                    const res = await projectManagerService.editBannerCateById(obj, id);
                    if (res == 'success') {
                        response.redirect('/admin/infor-project');
                    } else {
                        console.log('res', res);
                    }
                }
            })
            .catch(function (err) {
                console.log(err)
            })

    }
}
module.exports = new AdminController;