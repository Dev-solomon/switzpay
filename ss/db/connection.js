// Import required modules
const mongoose = require('mongoose'); 

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true});

mongoose.connection.on("error", function(error) {
 console.log("ERROR IN MONGO DATABASE:"+error);
});

mongoose.connection.on("open", function() {
 console.log("MONGODB SUCCESSFULLY CONNECTED");
});