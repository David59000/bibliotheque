const jwt = require("jsonwebtoken");
const config = require('../Config/config.json');
const Client = require("../Models/Client");
const bcrypt = require('bcrypt');



class AuthenticateService{
        async register(clientData){
            const client = await Client.create(clientData);
            return client
        }

        async login(email, password){
            const client =  await Client.findOne({where: {CL_Email: email}})
            const comparePassword = await bcrypt.compare(password, client.CL_Password)

            if (!client || comparePassword === false){
                throw new Error("Email ou password n'est pas correct")
            }
            return this.generateToken(client);
        }
    generateToken(client){
        const payload = {
            id: Client.CL_ID,
            email: client.CL_Email
        }
        return jwt.sign(payload,config.SECRET,{expiresIn: '1h'}) //il se connecte durant 1h après déconnexion
    }
}

module.exports = new AuthenticateService();