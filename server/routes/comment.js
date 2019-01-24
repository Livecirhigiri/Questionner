const express=require('express');
const authentication=require('../middleware/verify');
//
const router=express.Router();
//
const commentCtrl=require('../controllers/comment');


router.post('/:id_question/comment',authentication.verifyToken,commentCtrl.create);

module.exports=router;