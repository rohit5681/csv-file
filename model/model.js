const mongoose=require('mongoose');
const multer=require('multer');
const path= require('path');
const FILES_PATH=path.join("/uploads/files")

// creating file schema 
const fileSchema=new mongoose.Schema({
    filePath:{
        type:String
    },
    originalName:{
        type:String
    },
    file:{
        type:String
    }
},{
    timestamps:true
})

// setting for multer

let storage=multer.diskStorage({
    destination: function(req,file, cb){
        cb(null, path.join(__dirname, '..', FILES_PATH))
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + file.originalname + '-'+ Date.now());
    }
});

// static functions
fileSchema.statics.uploadedFile = multer({ storage: storage}).single("file")
fileSchema.statics.filePathx=FILES_PATH;

const File=mongoose.model('File',fileSchema);
module.exports=File;
