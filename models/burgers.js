
module.exports = function (sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull:false
            },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        validate:{
            noEmpytyName() {
                if (this.burger_name.length < 3) {
                    throw new Error("Burger name must be at least 3 characters");
                }
            }
        }
    });
return Burger;
};