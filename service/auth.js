// const sessionToUserMap = new Map();
const jwt = require('jsonwebtoken');
const secret = 'Darshan3452@#'

// function setUser(id,user) {
//     sessionToUserMap.set(id,user)
// };

// function getUser(id) {
//     const user= sessionToUserMap.get(id)
//     return user;
//  }
 

function setUser(user) {
    return jwt.sign({
     _id: user._id,
     email:user.email,
     role:user.role,
    },secret)
};


function getUser(token) {
    if(!token){
        return null;
    }
    try {
        const user = jwt.verify(token,secret)
        return user;
    } catch (error) {
        return null
    }

 }
 






module.exports={
    setUser,
    getUser,
}