function route(app) {
    app.use("/", require("./home.routes"))
    app.use("/google", require("./google.routes"))
    app.use("/admin", require("./admin.routes"))
}
module.exports = route;