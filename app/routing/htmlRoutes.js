var path = require("path");

module.exports = function(app){
    app.get("/friends", function(req,res){
        res.sendFile(path.join(__dirname,"../app/survey.html"));
    });

    app.get("/home", function(req,res){
        res.sendFile(path.join(__dirname, "../app/home.html"));
    });

    app.get("*", function(req,res){
        res.sendFile(path.join(__dirname, "../app/home.html"));
    });
}