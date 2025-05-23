const User = require('../model/user')
const { v4: uuidv4 } = require('uuid');
const {setUser} = require('../service/auth')
async function userSignUp(req, res) {
    const { name, email, password } = req.body;
    await User.create({
        name,
        email,
        password
    })
    return res.redirect('/')
}

async function userLogin(req, res) {
    const { email, password } = req.body;
     const user = await User.findOne({email,password});
     if(!user){
        res.render('login',{
            error:"Invalid user or password",
        });
     } 
    // const sessionId = uuidv4();
     const token =setUser(user)
    res.cookie("token",token)
    return res.redirect('/');

    
}

module.exports = {
    userSignUp,
    userLogin, 
}
