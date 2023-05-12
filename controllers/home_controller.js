const File=require('../modals/model');

// home page
module.exports.home=async function(req,res){
    try{
        let files = await File.find({});
        res.render('home',{
            file:files,
            title:'home page'
        });
    }catch(err){
        console.log('error in home',err)
    }
}
