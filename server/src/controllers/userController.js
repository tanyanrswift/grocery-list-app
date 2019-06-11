const User = require('../db/models').User;

module.exports = {
    signIn(req, res) {
        const {username, email, password} = req.body;
        User.login({username, password}), (err,data) => {
            if(err) {
                res.status(500).send();
            } else {
                res.json(data);
                console.log('successful sign in backend')
            }
        }
    },
    signOut(req, res){
        req.logOut();
        console.log('successful sign out');
    }
}