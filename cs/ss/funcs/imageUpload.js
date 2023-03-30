const multer = require("multer");
const path = require("path"); 

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "Uploads");
    },
    filename: function(req, file, cb){
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    }
});

let imageUpload = multer({ storage: storage });

module.exports = imageUpload;