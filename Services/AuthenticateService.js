const jwt = require("jsonwebtoken");
const config = require('../Config/config.json');
const Clientemprunteur = require("../Models/Client");



class AuthenticateService{
        async register(clientData){
            const client = await Clientemprunteur.create(clientData);
            return this.generateToken(client);
        }

        async login(email, password){
            const client =  await Clientemprunteur.findOne({ where : {CL_Email : email}})
            if (!client || !await Clientemprunteur.validatePassword(password)){
                throw new Error("Email ou password n'est pas correct")
            }
            return this.generateToken(client);
        }
    generateToken(client){
        const payload = {
            id: Clientemprunteur.CL_ID,
            email: client.CL_Email
        }
        return jwt.sign(payload,config.SECRET,{expiresIn: '1h'}) //il se connecte durant 1h après déconnexion
    }
}

module.exports = new AuthenticateService();