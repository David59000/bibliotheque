// Vient de la dépendance
const {Model, DataTypes} = require('sequelize');
// Vient de notre fichier Sequelize.js
const sequelize = require('../Config/Sequelize');

class Livre extends Model{
}

Livre.init({
    LI_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    LI_Editeur : {
        type : DataTypes.STRING,
        allowNull : false
    },
    LI_Auteur : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    LI_DateEdition : {
        type : DataTypes.DATE,
        allowNull : false
    },
    LI_Auteur : {
        type : DataTypes.INTEGER,
        allowNull : false 
    },
},{
    sequelize,
    modelName : 'Livre',
    tableName: 'livres',
    timestamps: false

})

module.exports = Livre;
