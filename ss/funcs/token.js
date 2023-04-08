const Jwt = require('jsonwebtoken'); 
 
// Authentication MiddleWare For JWT
const authenticateToken = (req, res, next) => {
  const token  = req.cookies.access_token; 
  console.log(req.cookies);

    if (token == null) return res.sendStatus(401)
  
    Jwt.verify(token, process.env.JWT_SECRET, (err, user) => {

      if (err) return res.json({ bMessage: "UnAuthorized Access"});

      req.userID = user;

      console.log(`${req.userID.name} Authentication verified`.green.bold);

      next()
    })
  } 

module.exports  = { authenticateToken }
