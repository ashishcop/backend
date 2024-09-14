const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.send(`OK!!!!!!!!!!`);
    
});


router.post('/',(req,res,next)=>{
    res.send(`product created`);
    
});

router.get('/:id',(req,res,next)=>{
    res.send(`product retrieved ${req.params['id']}`);
    
});

router.patch('/:id',(req,res,next)=>{
    res.send(`product patched ${req.params['id']}`);
    
});

router.delete('/:id',(req,res,next)=>{
    res.send(`product deleted ${req.params['id']}`);
    
});

module.exports = router;



