var express = require("express");
var router = express.Router();
var Burger = require("../models/burger.js");
var path = require("path");
var db = require("../models");

router.get("/", function(req, res) {
  db.Burger.findAll({})
  .then(function(data) {
    console.log(data);
    res.render("index", {burgers: data});
  });
});

router.post("/", function(req, res) {
  db.Burger.create({
    name: req.body.burger_name,
    devoured: req.body.devoured
  }).then(function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  db.Burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.redirect("/");
  });
});

module.exports = router;
