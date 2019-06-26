const User = require('../db/models').User;

module.exports = {
    signIn(req, res) {
        const {email, password} = req.body;
        User.login({email, password})
        .then(data => {
            res.status(200).json(data);
            console.log('sign in successful')
        })
    },
    signOut(req, res){
        req.logOut();
        console.log('successful sign out');
    },
    signUp(req, res){
        const {email, password} = req.body;
        User.create({email, password})
        .then(data => {
            res.status(201).json(data);
            console.log('User succdssfully created')
            console.log(User)
        })
    }
}