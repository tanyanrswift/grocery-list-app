module.exports = {
    // signUp(req, res, next){

    // },
    // signInForm(req, res, next){

    // },
    // signOut(req, res, next){

    // },
    create(req, res, next){
        let newUser = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            passwordConfirmation: req.body.passwordConfirmation
        };
        userQueries.createUser(newUser, (err, user) => {
            if(err){
                req.flash("error", err);
                res.redirect("/api/users/signUp");
            } else {
                req.flash("notice", "Successful Sign in!");
                res.redirect("/");
                console.log("User created");
            }
        });
    }//,
    // signIn(req, res, next){

    // }
}