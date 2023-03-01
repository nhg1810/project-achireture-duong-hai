
const projectManagerService = require('../services/projectManager.service');
class HomeController {
    //[GET] home
    async index(request, response, next) {

        let res = await projectManagerService.test(request);
        console.log(res);
        if (res == 'error') {
            response.send("error");
        } else {
            response.render('home', { layout: 'layout-user.hbs' })
        }

    }
    home(req, res) {
        res.render('page');
    }
}
module.exports = new HomeController;