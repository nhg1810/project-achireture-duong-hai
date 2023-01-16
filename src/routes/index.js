function route(app) {
    app.use("/", require("./home.routes"))
    app.use("/new", require("./new.routes"))
    app.use("/hai", require("./hai.routes"))
}
module.exports = route;