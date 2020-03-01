var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burgers.js");

router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});


router.post("/", function(req,res){
    burger.create(["burger_name","devoured"],[req.body.burger_name,req.body.devoured],function(){
        res.redirect("/");
    });
});


router.put("/:id", function(req,res){
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: 1
    }, condition, function(){
        res.sendStatus(200).end();
        // res.redirect("/");
    });
});

module.exports = router;