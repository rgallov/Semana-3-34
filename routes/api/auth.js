const router = require('express').Router();
/* const config = require('../../secret/config.js');


const { User } = require('../../models'); */

const auth_controller = require('../../controllers/authController');
/* 
const bcrypt = require('bcryptjs');

const { Op } = require("sequelize");

const jwt = require('jsonwebtoken'); */

// api/auth/
router.get('/',auth_controller.listar);
//api/auth/signin
router.post('/signin',auth_controller.signin);
//api/auth/register
router.post('/register',auth_controller.register);
//api/auth/changePass
router.post('/changePass',auth_controller.changePass);

/* Sino se usa el controlador se habilita este código

router.get('/', async (req, res) => {
    res.status(403).send("Forbidden resource.");

});

//api/auth/signin
router.post('/signin', async (req, res) => {
    try {
        console.log(req.body);
        // const emailIngresado = await req.body.email;

        // const user = await User.findOne({
        //     where:{
        //         email: {
        //             [OP.like]: emailIngresado
        //         }            
        //     }
        // });    
        console.log("Email ingresado: " + req.body.email)
        console.log("Password ingresado: " + req.body.password)
        let user = await User.findOne({ where: { email: req.body.email } })
        console.log("User : " + JSON.stringify(user));
        if (user) {
            if (bcrypt.compareSync(req.body.password, user.password)) { //usuario logueado con exito
                let token = jwt.sign({ id: user.id, name: user.name, email: user.email },
                    config.secret,
                    {
                        expiresIn: 86400 // expires in 24 hours 
                    });
                // data = {                    
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
    }
});

//api/auth/register
router.post('/register', async (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.status(200).json(user);


    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const avatar = gravatar.url((req.body.email, {
                s: '200', // Size
                r: 'pg', // Rating
                d: 'mm'  // Default image
            }));

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar: "",
                password: req.body.password
            });
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser.save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                })
            })
        }
    })
}); */

module.exports = router;