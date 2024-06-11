// Vient de la dépendance
const {Model, DataTypes} = require('sequelize');
// Vient de notre fichier Sequelize.js
const sequelize = require('../Config/Sequelize');

class Auteur extends Model{
}

Auteur.init({
    AU_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    AU_Nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    AU_Prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    AU_DateNaissance : {
        type : DataTypes.DATE,
        allowNull : false
    },
},

{
    sequelize,
    modelName : 'Auteur',
    tableName: 'auteur',
    timestamps: false

})

module.exports = Auteur;
