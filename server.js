var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var PORT = process.env.PORT || 3500;
var db = require("./models");
var app = express();

app.use(bodyParser.json());
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
