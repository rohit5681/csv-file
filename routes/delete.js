const express=require('express');
const router=express.Router();
const deleteController=require('../controllers/delete_controller')

// for routing a delete
router.get('/:file',deleteController.delete);

module.exports=router;
