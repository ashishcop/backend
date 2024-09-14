const express = require('express');

const app = express();

app.get('/',(req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    res.send('OK!!');
})

app.listen(3000,()=>console.log(`server started on port 3000`));