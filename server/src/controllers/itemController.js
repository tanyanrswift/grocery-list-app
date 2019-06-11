const Sequelize = require("sequelize");
const Item = require("../db/models").Item;

module.exports = {
    index(req, res){
        console.log('index called successfully')
        Item.findAll()
        .then(data => {
            res.status(200).json(data);
            console.log(Item);
        })
    },
    create(req, res){
        console.log('create called successfully')
        let {name, purchased} = req.body;
        Item.create({name, purchased})
        .then(data => {
            res.status(201).json(data);
        })
    }
}