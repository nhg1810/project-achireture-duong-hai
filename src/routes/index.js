const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const AdminController = require('../app/controllers/AdminController');
const projectManagerService = require('../app/services/projectManager.service');

function route(app) {
    app.use("/", require("./home.routes"))
    app.use("/google", require("./google.routes"))
    app.use('/admin-login', AdminController.login);
    app.use(cookieParser());
    app.use("/admin", async function (request, response, next) {
        if (request.body.userName || request.body.passWord) {
            const res = await projectManagerService.checkLogin(request);
            response.setHeader("Content-Type", "text/json");
            response.setHeader("Access-Control-Allow-Origin", "*");

            if (res == "") {
                response.json({
                    status: 'error',
                    msg: 'Sai tài khoản mật khẩu !'
                });
            } else {
                response.json({
                    status: 'success',
                    data: res
                });
                //call request admin/cookie
            }

        } else if (request.cookies.token) {
            try {
                var token = request.cookies.token;
                console.log(token);
                var genToken = jwt.verify(token, 'mk');
                if (genToken) {
                    next();
                } else {
                    response.send("Đăng nhập bất hợp pháp !!!");
                }
            } catch (error) {
                console.log(error)
                response.send('Lỗi server');
            }
        } else {
            response.redirect('/admin-login');
        }
    }, require("./admin.routes"));

}
module.exports = route;