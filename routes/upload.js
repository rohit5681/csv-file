const express=require('express');
const router=express.Router();
const uploadController=require('../controllers/upload_controller');
const viewController=require('../controllers/view_controller')

// post the form item
router.post('/create',uploadController.create)
// for view the item
router.get('/:file',viewController.view);

module.exports=router;
