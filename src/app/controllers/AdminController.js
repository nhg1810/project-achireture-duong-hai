const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');

//helper
const curdHelper = require('../helpers/crud');
class AdminController {
    //[GET] home
    async index(request, response, next) {
        response.render('admin')
    }
}
module.exports = new AdminController;