
const projectManagerService = require('../services/projectManager.service');
const userManagerService = require('../services/userManager.service');
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
    async getAllInfUserPage(request, response, next) {
        let res = await userManagerService.getAllInformationUserPage(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res);
    }
    
    async findProjectByIdImage(request, response, next){
        let res = await userManagerService.findProjectByIdImage(request);
        response.setHeader("Content-Type", "text/json");
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.json(res);
    }
}
module.exports = new HomeController;