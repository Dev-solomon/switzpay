const express = require('express');
const route = express.Router();
// const controller = require('./controller');

route.get('/', function(req,res){

    res.send(`<script> 

    if(confirm("Do You Want To Make More Income?")){
        if(confirm("Have An Account?")){
           // window.location.assign("http://localhost:3000/login")
             console.log( window.location.href)
        } else{
            // window.location.assign("http://localhost:3000/signup")
        }
    }
    </script>`);

})


module.exports = route;