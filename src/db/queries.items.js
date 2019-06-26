const Item = require('./models').Item;

module.exports = {
    updateItem(req, updatedItem, callback){
        return Item.findById(req.params.id)
        .then((item) => {
            item.update(updatedItem, {
                fields: Object.keys(updatedItem)
            })
            .then(() => {
                callback(null, item);
            })
            .catch((err) => {
                callback(err);
            })
        })
    },
    deleteItem(req, callback){
        return Item.findOne({
            where: {id: req.params.id}
        })
        // return Item.findById(req.params.id)
        .then((item) => {
            console.log(Item);
            Item.destroy()
            .then((res) => {
                callback(null, Item);
            })
        })
    }
}