var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req,res){
    var burerList = [];
    db.Burger.findAll({}).then(function(result){
        result.forEach(function(item, i) {
            burerList.push(item.dataValues);
        });
        var hbsObject = {
            burgers: burerList
        };
        res.render("index", hbsObject);
    });

});

router.post("/", function(req,res){
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then(function(result){
        // console.log(result);
        res.status(200).redirect("/");
    }).catch(function(err){
        if (err.errors[0].path == "noEmpytyName") {
            console.log(`Error: ${err.errors[0].message}`);
        }

    });
});

router.put("/:id", function(req,res){
    db.Burger.update({
        devoured:true
    },
    {
        where: {
            id: req.params.id
        }
    }
    ).then(function(result){
        res.status(200).end();
    });
});



module.exports = router;