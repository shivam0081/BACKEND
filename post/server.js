const express=require('express');
const app=express();

app.get("/signup",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})




app.listen(4545,()=>{
    console.log('Server is running on port 4545');
    
})