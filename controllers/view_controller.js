const csv = require('csv-parser')
const fs = require('fs');
const path=require('path');
const File=require('../modals/model')

// for view the file
module.exports.view=async function(req,res){
    console.log("req.params.file",req.params.file);
    let filePaths=await File.findOne({file: req.params.file});
    console.log("filePaths:",filePaths);
    console.log("filePaths.filePath:",filePaths.filePath)
    const results=[];
    const header=[];
    fs.createReadStream(filePaths.filePath)
      .pipe(csv())
      .on('headers', (headers) => {
            headers.map((head)=>{
                header.push(head);
            })
            console.log("header",header);
        })
        .on('data', (data) =>
        results.push(data))
        .on('end', () => {
            console.log("hed",header)
            console.log('results',results)
            console.log('results.length',results.length)
            res.render('view',{
                title: filePaths.originalName,
                head:header,
                data:results,
                length:results.length
            })
      });
}
