module.exports = {
    showAll(req, res, next){
        Item.find()
        .then(data => {
            res.status(200).json(data);
            console.log(Item);
        })
    },
    create(req, res, next){
        const {name, purchased} = req.body;
        Item.create({name, purchased})
        .then(data => {
            res.status(201).json(data);
            console.log(Item);
        })
    }
}