module.exports = function (application) {

    application.get("/sobre", function (req, res) {
        res.render("sobre-mim");
    });
}