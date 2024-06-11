const AuthenticateService = require("../Services/AuthenticateService");
const jwt = require('jsonwebtoken');
const config = require('../Config/config.json');

class AuthenticateController{

    async register(request, result){
        try {
            console.log("controller register",request.body)
            const client = await AuthenticateService.register(request.body);
            result.json({client : client,confirmationRegister : "Votre inscription est réussie"});
        
        } catch (error) {
            result.status(500)
            result.json({error : "Une erreur est survenue lors de de l'inscription"})
        }
    }

    async login(request, result){
        try {
            console.log(request.body)
            const {email, password} = request.body;
            const token = await AuthenticateService.login(email, password);
            result.json({token : token,confirmationConnexion : "Votre connexion est réussie"})
        } catch (error) {
            result.status(401)
            result.json({error : "Mot de passe ou email incorrect"});
        }
    }

    authenticateToken (request, result, next){
        const authHeader = request.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if(!token){
            result.status(401);
            return result.json({error : "Vous n'avez pas accès à cette route"});

        }

        jwt.verify(token, config.SECRET, (error, user) => {
            if (error) {
                result.status(401)
                return result.json({error : "Votre token n'est pas valide"});
            }
            request.user = user;
            next();
        })

    }


}

module.exports = new AuthenticateController();