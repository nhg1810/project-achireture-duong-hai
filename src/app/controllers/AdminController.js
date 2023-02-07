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
            response.render('admin')
        }
    }

    async projectManager(request, response, next) {
        let res = await projectManagerService.getAllFileInFolder(request);
        let all_cate_prod = await projectManagerService.allCateProject(request);
        let all_prod = await projectManagerService.getAllProject(request);

        if (res == 'error') {
            return await response.send("error");
        } else {
            // console.log(res);
            // response.send(res)
            return await response.render('project-manager', {
                imageDesign: res,
                all_cate_prod: all_cate_prod,
                all_prod: all_prod
            });
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
        // console.log(request.body)
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
    //[GET] home
    async projectPersonnelManager(request, response, next) {
        response.render('project-personnel-manager')
    }
    //[GET] home
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
}
module.exports = new AdminController;