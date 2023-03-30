const express = require('express');  
const route = express.Router();
const userController = require('./controllers/userCtrl'); 
const { authenticateToken } = require('./funcs/token');
const imageUpload = require('../funcs/imageUpload');

module.exports = function(app) {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  }); 

}


 
// Route For Signing a New User
route.post('/checkSign/:username/:email/:password/:confirm', userController.checkSignUp);

// Route For Signup On success
route.post('/checkSign/newUser/:email', userController.checkSignSuccess);

// Route For SignIn To User Account
route.post('/checkSign/:email/:loginPassword', userController.checkSignIn);
// For Upload Of Images 
route.post('/imageUpload', imageUpload.single("UserImage"), userController.imageUpload);
  

route.get('/token/test', authenticateToken, userController.test);


 
 
module.exports = route;