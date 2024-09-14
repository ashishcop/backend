const express = require('express');
const productRoutes = require('./routes/product.route')
const app = express();


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