const Course = require('../model/EntityModel');
const logger = require('../constants/LoggerConstant');

//helper
const curdHelper = require('../helpers/crud');
class HomeController {
    //[GET] home
    async index(request, response, next) {
        const errors = [];
        try {
            let data = await curdHelper.getAll({
                model: 'course',
                query: request.query
            });
            data = data.map(data => data.toObject());
            response.render('home', {
                data: data
            })
            // return logger.status200(response, 'success', '', data)
        } catch (error) {
            errors.push(error.message);
            return logger.status500(response, error, errors);
        }
        // res.render('home')
    }

    home(req, res) {
        res.render('home');
    }
}
module.exports = new HomeController;