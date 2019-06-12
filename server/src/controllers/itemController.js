const Sequelize = require("sequelize");
const Item = require("../db/models").Item;
const itemQueries = require('../db/queries.items.js');

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
    },
    edit(req, res){
        console.log('edit called successfully')
        Item.findById(req.params.id)
        .then(data => {
            res.status(200).json(data);
        })
    },
    update(req, res){
        console.log('update called successfully')
        itemQueries.updateItem()
        .then(data => {
            res.status(200).json(data);
        })
    },
    delete(req, res){
        console.log('delete called successfully')
        itemQueries.deleteItem()
        .then(data => {
            res.status(200).json(data);
        })
    }
}