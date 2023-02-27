const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');
const projectManagerService = require('../services/projectManager.service');


//helper
const curdHelper = require('../helpers/crud');
const CateProject = require('../model/CateProject');
const Project = require('../model/ProjectModel');
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
}
module.exports = new AdminController;