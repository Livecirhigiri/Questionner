const express=require('express');
const authentication=require('../middleware/verify');
//
const router=express.Router();
//
const rsvpCtrl=require('../controllers/rsvp');


router.post('/:id_rsvp',authentication.verifyToken,rsvpCtrl.rsvpAns);

module.exports=router;