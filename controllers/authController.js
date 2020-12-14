const config = require('../secret/config.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { Op } = require("sequelize");

exports.listar = async function(req, res) {
    //res.status(403).send("Forbidden resource.");
    let users = await User.findAll()
    return res.status(200).json(users);
};

exports.signin = async function(req, res, next) {
    try {
        let user = await User.findOne({ where: { email: req.body.email } })
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (passwordIsValid) { //usuario logueado con exito
                let token = jwt.sign({ id: user.id, name: user.name, email: user.email },
                    config.secret,
                    {
                        expiresIn: 86400 // expires in 24 hours 
                    });
                //  Código para personalizar el objeto respuesta
                //  data = {                    
                //         'name':user.name,
                //         'email':user.email                    
                //  }
                res.status(200).send({ auth: true, accessToken: token, user: user });
            } else {  //El usuario ingresa una contraseña inválida
                res.status(401).send({ auth: false, accessToken: null, reason: "Invalid Password!" });
                //res.status(401).send("Invalid Password!");
            }
        } else { //El usuario no existe en la bases de datos
            console.log('User not found')
            res.status(404).send('User Not Found.');
        }
    } catch (e) {
        console.log(e, "ERROR");
        next(e);
    }
};

exports.register = function(req, res) {
    User.findOne({ email: req.body.email }).then(async user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            req.body.newPassword = bcrypt.hashSync(req.body.password, 10);
            const user = await User.create(req.body);
            return res.status(200).json(user);
        }
    })
};

exports.changePass = async function(req, res) {
    User.findOne({ email: req.body.email }).then(async user => {
        if (user) {
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if(passwordIsValid){
                if(req.body.newPassword === req.body.newPasswordPair){
                    const newPassword = bcrypt.hashSync(req.body.password, 10);            
                    const user = await User.update({passwpod: newPassword });
                    res.status(200).json(user);            
                }else{
                    return res.status(400).send("la confirmacion del nuevo password es errónea");
                }
            }else{
                return res.status(400).send("el password es erróneo");
            }
            
            
            return res.status(400).json({ email: "Email already exists" });
        } else {
            return res.status(404).send('User Not Found.');
        }
    })
};