const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}))
//It is a Middleware that passes urlencoded data into object
let userData=[];
app.get("/adduser",(req,res)=>{
    res.sendFile(__dirname+"/register.html");
})

app.post("/adduser",(req,res)=>{
    let{username,useremail,userpassword}=req.body;
    console.log(username,useremail,userpassword);
    let newUser={
        name:username,
        email:useremail,
        password:userpassword
    }
    userData.push(newUser);
    res.send(userData);
})


app.listen(4545,()=>{
    console.log('Server is running on port 4545');
    
})