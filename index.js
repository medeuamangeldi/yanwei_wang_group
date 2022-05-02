const express = require("express"),
      app = express(),
      bodyParser = require('body-parser'),
      port = 3000;

app.listen(process.env.PORT || port, function(req, res){
    console.log("Listening on port " + port);
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("pages/main");
});

app.get("/worm", function(req, res){
    res.render("pages/worm");
});

app.get("/pump", function(req, res){
    res.render("pages/pump");
});