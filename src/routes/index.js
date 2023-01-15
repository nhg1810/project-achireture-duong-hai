
const router = require("express").Router();
router.get('/', (req, res) => {
    res.send("test page")
});
router.get('/home', (req, res) => {
    res.send("Home page")
});

module.exports = router;