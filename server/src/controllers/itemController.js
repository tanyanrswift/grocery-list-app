const Sequelize = require("sequelize");

module.exports = {
    index(req, res){
        Item.findAll()
        .then(data => {
            res.status(200).json(data);
            console.log(Item);
        })
    },
    create(req, res){
        let {name, purchased} = req.body;
        Item.create({name, purchased})
        .then(data => {
            res.status(201).json(data);
        })
    }
}