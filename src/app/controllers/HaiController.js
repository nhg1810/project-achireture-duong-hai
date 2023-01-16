const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');

//helper
const curdHelper = require('../helpers/crud');
class HaiController {
    //[GET] home
     index(request, response, next) {
        
        response.render('hai')
    }

    home(req, res) {
        res.render('page');
    }
}
module.exports = new HaiController;