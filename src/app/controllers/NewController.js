const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');

//helper
const curdHelper = require('../helpers/crud');
class NewController {
    //[GET] home
 index(request, response, next) {
      
    response.render('new')
    }

    home(req, res) {
        res.render('page');
    }
}
module.exports = new NewController;