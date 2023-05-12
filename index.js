const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const port=process.env.port || 8007;
const ejslayouts=require('express-ejs-layouts');
const sassMiddlWare=require('node-sass-middleware');
const db=require('./config/mongoose')
app.use(express.urlencoded());

// node-sass-middleware configuration
app.use(
    sassMiddlWare({
        src: "./assets/scss",
        dest: "./assets/css",
        debug: true,
        outputStyle: "extended",
        prefix: "/css",
    })
);
  
app.use(express.static('./assets'));
// setting a layout
app.use(ejslayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

const router=require('./routes/index');

app.use(bodyParser.urlencoded({extended:false}))
app.use('/',router);
// setting view
app.set('view engine','ejs');
app.set('views','./views');

// start server
app.listen(port,function(err){
    if(err){
        console.log('error in server starting',err);
    }
    console.log('server is running on the port: ',port);
})
