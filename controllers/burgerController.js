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
    console.dir(req.body);
    // burger.create([],[],function(){
        // res.redirect("/");
    // });
});








module.exports = router;