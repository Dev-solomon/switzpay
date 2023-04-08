const dataValidator = require('../funcs/datavalidator');
// eslint-disable-next-line no-unused-vars
const colors = require('colors');
const userModel = require('../db/models/User');
// const { generateAccessToken } = require('../funcs/token'); 
const Jwt = require('jsonwebtoken');
const path = require("path");
const fs = require("fs");


 

// For Checking filled-in details in the SignUp Page
exports.checkSignUp = (req, res) => {
    const { username, email, password, confirm } = req.params;

   const { error} =  dataValidator.validate({username: username, password: password, email: email, confirmPassword: confirm});

  if (error){ 
     console.log(error.message);
     return res.json({
      bMessage: `Fill Boxes' Information as Required.`
     }); 
  }  

    const userExist = userModel.find({ email: email });

    if(userExist){

      userExist.then(user => {

        for(let i = 0; i < user.length; i++) {

          console.log(`${user[i].email} trying to create Account Again`.yellow.bold);
         
           return res.json({
                   bMessage: `${user[i].email} Already Exists.` 
                 });  
         } 

      })
    } else {

    console.log(`${username} With ${email} Is Creating an Account`.yellow.bold); 

  }
  
    
}

// For Checking Onsuccess on SignUp
exports.checkSignSuccess= (req, res) => {
    const { email } = req.params;

   const { error } =  dataValidator.validate({email: email});

  if (error){ 
     return res.json({
      bMessage: `Set An appropriate Email Address`
     }); 
  }  

  const userSuccess = userModel.find({ email: email });

 if(userSuccess){
  userSuccess.then(user => {
    
    for(let i = 0; i < user.length; i++) {

     console.log(`${user[i].username} Account Successfully created`.yellow.bold);
    
      return res.json({
              bMessage: `${user[i].username} successfully Registered.` 
            });  
    } 
  })
  .catch(err => {
    res.status(500);
  });
 } else {
  return res.json({
    bMessage: `Something In the server Occured! Try Again Later.` 
  })
 }

    
}
 
// Login controller For Users
exports.checkSignIn = ( req, res) => {
  const { email, loginPassword } = req.params; 
//   const { error, value } = dataValidator.validate({email: email, password: loginPassword});

//   if (error){ 
//     return res.json({
//      bMessage: `Check Your Login Details`
//     }); 
//  }  

 const checkUser = userModel.find({email: email, password: loginPassword});

    if(checkUser){
      checkUser.then(user => {
        
        for(let i = 0; i < user.length; i++) {

        console.log(`${user[i].username} Just Signed into An Account with ${user[i].email}`.yellow.bold);
          
        const User = user[i].username;
        const Email = user[i].email;
        let accessToken;
    
        try {
          //Creating jwt token
          accessToken = Jwt.sign({name: User, email: Email}, process.env.JWT_SECRET);

          if (accessToken) {
            console.log(`${User}'s Token Has Been Generated.`.yellow.bold);
          } 
        } catch (err) {
          console.log(` This is the issue ${err}`); 
        } 
          
       console.log(`${accessToken}`.green); 
       
       return res
       .cookie("access_token", accessToken, {
          httpOnly: false, 
          maxAge: 86400000,
          secure: false
       })
       .status(200)
       .json({ bMessage: `${user[i].username} Logged In.` });

        } 
      })
      .catch(err => {
        res.status(500);
      });
    }  
   

}
 
// For Image-Upload of User
exports.imageUpload = (req, res) => {
  const obj = {
    img: {
        data: fs.readFileSync(path.join(__dirname + "/Uploads/" + req.file.filename)),
        contentType: "image/png"
    }
}
const newImage = new MerchantModel({
    image: obj.img
});

newImage.save((err) => {
    err ? console.log(err) : res.json({ bMessage: `Image Successfully Added!`});
});
}

exports.DashboardData = (req, res) => {
  res.json({
    bMessage: `${req.userID.name}`
  });

}



















































































































exports.test = (req, res) => { 
  res.json({
    bMessage: `${req.userID.name}, the jwt process has worked`
  });
  console.log(`${req.userID.name}, the jwt process has worked`);
}
