module.exports = function (application) {

    application.get("/projetos", function (req, res) {
        res.render("projetos");
    });
}