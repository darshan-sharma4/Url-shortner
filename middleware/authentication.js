const { getUser } = require('../service/auth')

function checkForAuthentication(req, res, next) {
    const tokenCookies = req.cookies?.token;
    req.user = null;
    if (!tokenCookies )
        return next();
    const user = getUser(tokenCookies);
    req.user = user;
    return next()
}

function restrictToRole(roles=[]) {
    return function (req, res, next) {
        if (!req.user) return res.redirect('/login')
        if (!roles.includes(req.user.role)) return res.end("unauthorized")
        return next();
    };
};

// async function strictToLoginUserOnly(req, res, next) {
//     // const userUid = req.cookies?.uuid;
//     const userUid = req.headers["Authorization"];
//     if (!userUid) {
//         return res.redirect('/login')
//     }
//     const token = userUid.split("Bearer")[1]
//     const user = getUser(token);
//     if (!user) {
//         return res.redirect('./login');
//     }
//     req.user = user;
//     next();
// }

// async function checkAuth(req, res, next) {
//     // const userUid = req.cookies?.uuid;
//     console.log(req.headers)
//     const userUid = req.headers["authorization"];
//     const token = userUid.split("Bearer")[1]
//     const user = getUser(token);
//     console.log(user);
//     req.user = user;
//     next();
// }

module.exports = {
    // strictToLoginUserOnly,
    // checkAuth,

    checkForAuthentication,
    restrictToRole,
}

