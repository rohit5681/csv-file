const express=require('express');
const router=express.Router();
const homeController=require('../controllers/home_controller')

console.log('router working');
router.get('/',homeController.home);
router.use('/upload',require('./upload'));
router.use('/delete',require('./delete'))

module.exports=router;
