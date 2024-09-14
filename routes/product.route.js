const express = require('express');
const Product = require('./../models/product.model');


const router = express.Router();



router.get('/',(req,res,next)=>{
    res.send(`OK!!!!!!!!!!`);
    
});


router.post('/',(req,res,next)=>{
    const product = new Product({name: req.body.name, price:req.body.price});
    product.save().then(result=>{console.log(result);  res.send(result);}).catch(err=>console.log(err.message));
    
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



