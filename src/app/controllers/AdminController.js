const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');

//helper
const curdHelper = require('../helpers/crud');
class AdminController {
    //[GET] home
    async index(request, response, next) {
        response.render('admin')
    }
    //[GET] home
    async projectManager(request, response, next) {
        response.render('project-manager')
    }
    //[GET] home
    async projectPersonnelManager(request, response, next) {
        response.render('project-personnel-manager')
    }
    //[GET] home
    async projectPhotoManager(request, response, next) {
        response.render('project-photo-manager')
    }
}
module.exports = new AdminController;