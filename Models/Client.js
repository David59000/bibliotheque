// Vient de la dépendance
const {Model, DataTypes} = require('sequelize');
// Vient de notre fichier Datatypes.js
const sequelize = require('../Config/Sequelize');
const TransactionEmprunter = require('./TransactionEmprunter');
// const Compte = require('./Compte');
const bcrypt = require('bcrypt');

class Client extends Model{

        async validatePassword(password) {
            return await bcrypt.compare(password, this.CL_Password);
        }

}

Client.init({
    CL_ID : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    CL_Nom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Prenom : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Telephone : {
        type : DataTypes.CHAR,
        allowNull : true
    },
    CL_Email : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Adresse : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_Ville : {
        type : DataTypes.STRING,
        allowNull : false
    },
    CL_CodePostal : {
        type : DataTypes.CHAR,
        length: 7,
        allowNull : false
    },
    CL_Password :{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName : 'Client',
    tableName: 'Clientemprunteur',
    timestamps: false,
    hooks : {
        beforeCreate : async (clientemprunteur) => {
        clientemprunteur.CL_Password = await bcrypt.hash(clientemprunteur.CL_Password,10);
        },
        beforeUpdate : async (clientemprunteur) => {
            if (clientemprunteur.changed('CL_Password')) {
                clientemprunteur.CL_Password = await bcrypt.hash(clientemprunteur.CL_Password, 10)
            }
        }
    }

})
// Client.hasMany(TransactionEmprunter, {as : "transactionEmprunter", foreignKey : "FK_Livre"})
module.exports = Client;