module.exports = function(application){

    application.get("/contato", function(req, res){
        res.render("contato");
    });
}