function route(app) {
    app.use("/", require("./home.routes"))
}
module.exports = route;