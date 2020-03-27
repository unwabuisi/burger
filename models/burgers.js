// import ORM to create functions
// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burgers", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burgers", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burgers", objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };


// export database functions for controller (burgerController.js)
// module.exports = burger;


module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN
	});
	return  Burger;
};