const { Product } = require('../models');
const { Op } = require("sequelize");

exports.list = async function(req, res, next) {
    try {       
        console.log(req.body.idCompany) 
        let products = await Product.findAll({ where: { idCompany: req.body.idCompany } })
        if(products){
            return res.status(200).json(products);
        }else{
            return res.status(400).send("No hay productos para esta compañia")
        }
    } catch (e) {
        console.log(e,"Error");
        next(e);
    }
};

exports.edit = async function(req, res, next) {
    try {
        let product = await Product.findOne({ where: { id: req.body.id } })
        if (product) {
            await product.update(
                { 
                    codigo: req.body.codigo,
                    name: req.body.name,
                    description: req.body.description,
                    idCompany: req.body.idCompany,
            },
            {
                where: { id: req.body.id }
            });
            return res.status(200).json(product);
        } else { //El producto no existe en la bases de datos
            console.log('Product not found')
            res.status(404).send('Product Not Found.');
        }
    } catch (e) {
        console.log(e, "ERROR");
        next(e);
    }
};

exports.register = async function(req, res,next) {
    try{
        const product = await Product.findOne({where: { codigo: req.body.codigo }});
        if (product) {
            return res.status(400).json({ codigo: "Código already exists" });
        } else {
            const product = await Product.create(req.body);
            return res.status(200).json(product);
        }    
    } catch (e) {
        console.log(e,"Error");
        next(e);
    }
};

exports.delete = async function(req, res,next) {
    try{

        const product = await Product.findOne({where:{ id: req.body.id }});
        if (product) {
            await product.destroy();
            return res.status(200).send("Producto eliminado.");
        } else {
            return res.status(400).send("El producto no existe.");
        }
    } catch (e) {
        console.log(e,"Error");
        next(e);
    }
};


exports.searchByCode = async function(req, res, next) {
    try{
        const product = await Product.findOne({where:{ codigo: req.body.codigo }});
        if (product) {            
            return res.status(200).json(product);
        } else {
            return res.status(400).send("El producto no fue encontrado.");
        }
    } catch (e) {
        console.log(e,"Error");
        next(e);
    }
};
