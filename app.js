const express = require('express');
const productRoutes = require('./routes/product.route')
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

mongoose.connect('mongodb://127.0.0.1:27017/local',{
  
}).then(()=>{
    console.log('Mongodb is connected');
}).catch((err)=>console.log(err));


app.use('/products',productRoutes);

app.use((req,res,next)=>{
    const err = new Error('Not Found');
    res.status(404);
    next(err);
})


// Express ErrorHandler

app.use((err,req,res,next)=>{
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })

})
app.listen(3000,()=>console.log(`server started on port 3000`));