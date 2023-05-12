const File=require('../modals/model');
// for deleteing a csv file
module.exports.delete = async function(req, res){
    try{
        const filename = req.params.file;
        
        let isFile = await File.findOne({file: filename});
        if(isFile){
            await File.deleteOne({file: filename});
            console.log("File Deleted");
            
            return res.redirect("/");
        }else{
            console.log("file not found");
            return res.redirect("/");
        }
    }catch(err){
        console.log(err);
        return res.statu(500).json({
            message: "Internal Server Error"
        });
    }
}
