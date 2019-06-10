module.exports = {
    findAll(req, res){
        Item.findAll()
        .then(data => {
            res.status(200).json(data);
            console.log(Item);
        })
    }
}