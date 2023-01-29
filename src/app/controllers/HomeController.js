
const projectManagerService = require('../services/projectManager.service');
class HomeController {
    //[GET] home
    async index(request, response, next) {

        let res = await projectManagerService.test(request);
        if (res == 'error') {
            response.send("error");
        } else {
            response.render('home', {
                data: res
            })
        }

    }

    home(req, res) {
        res.render('page');
    }
}
module.exports = new HomeController;