var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions
// var burger = require("../models/burger.js");

router.get("/", function(req,res){
    res.render("index");
});


router.post("/", function(req,res){

});






module.exports = router;