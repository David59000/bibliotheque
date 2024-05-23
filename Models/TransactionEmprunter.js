// Vient de la dépendance
const {Model, DataTypes} = require('sequelize');
// Vient de notre fichier Sequelize.js
const sequelize = require('../Config/Sequelize');

class TransactionEmprunter extends Model{
}

TransactionEmprunter.init({
    TR_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    TR_type : {
        type : DataTypes.STRING,
        allowNull : false
    },
    TR_DateDepart : {
        type : DataTypes.DATE,
        allowNull : false
    },
    TR_DateRetour : {
        type : DataTypes.DATE,
        allowNull : false
    },
    FK_Emprunteur : {
        type : DataTypes.INTEGER,
        allowNull : true 
    },
    FK_Livre : {
        type : DataTypes.INTEGER,
        allowNull : true 
    },
},{
    sequelize,
    modelName : 'TransactionEmprunter',
    tableName: 'transactionemprunter',
    timestamps: false

})

module.exports = TransactionEmprunter;