// Import required modules
const mongoose = require('mongoose'); 
const colors = require("colors");

mongoose.connect("mongodb+srv://SolomonNtia:SolomonNtia7@cluster0.pjcpt7m.mongodb.net/", {useNewUrlParser: true});

mongoose.connection.on("error", function(error) {
 console.log("ERROR IN MONGO DATABASE:"+error);
});

mongoose.connection.on("open", function() {
 console.log(`MONGODB SUCCESSFULLY CONNECTED`);
});