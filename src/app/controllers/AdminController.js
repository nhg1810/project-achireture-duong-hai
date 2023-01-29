const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');
const projectManagerService = require('../services/projectManager.service');


//helper
const curdHelper = require('../helpers/crud');
class AdminController {
    //[GET] home
    async index(request, response, next) {
        let res = await projectManagerService.test();
        console.log(res);
        response.render('admin')
    }
    //[GET] home
    async projectManager(request, response, next) {
        response.render('project-manager')
    }
}
module.exports = new AdminController;