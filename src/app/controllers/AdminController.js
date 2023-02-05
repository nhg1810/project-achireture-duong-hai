const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');
const projectManagerService = require('../services/projectManager.service');


//helper
const curdHelper = require('../helpers/crud');
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
            console.log(res);
            // response.send(res)
            return await response.render('project-manager', {
                imageDesign: res,
                all_cate_prod: all_cate_prod,
                all_prod:all_prod
            });
        }
    }

    async createCategoryProject(request, response, next) {
        let res = await projectManagerService.addCateProduct(request);
        if (res == "success") {
            response.redirect('/admin/project-manager')

        } else {
            console.log(res)
            response.send("thất bại")
        }
    }
    async createProdject(request, response, next) {
        console.log(request.body)
        let res = await projectManagerService.addProject(request);
        console.log(res);

        if (res == "success") {
            response.setHeader("Content-Type", "text/json");
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.json('success')
        } else {
            console.log(res)
            response.send("thất bại")
        }
    }
}
module.exports = new AdminController;