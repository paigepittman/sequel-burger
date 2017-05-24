module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  });
  return Burger;
};





// var orm = require("../config/orm.js");
//
//
// var burger = {
//   all: function(callback) {
//     orm.selectAll("burgers", function(res) {
//       callback(res);
//     });
//   },
//   create: function(cols, vals, callback) {
//     orm.insertOne("burgers", cols, vals, function(res) {
//       callback(res);
//       console.log(res);
//     });
//   },
//   update: function(objColVals, condition, callback) {
//     orm.updateOne("burgers", objColVals, condition, function(res) {
//       callback(res);
//     });
//   }
// };
//
//
// module.exports = burger;
