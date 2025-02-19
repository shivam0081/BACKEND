//it is function which runs between the request and response
// it has access to request and response objects
// running a middleware at application level is done app.use()
//if we run a middleware at application level it will run on every requests

const express = require("express");
const app= express();
app.use(m1);
app.use(m2);    
app.get("/",(req,res)=>{ 
    console.log("running get request on path");
    res.send("Home");
});
app.get("/about",(req,res)=>{ 
    console.log("running about request");
    res.send("About");
});
function m1(req,res,next){
    console.log(" running Middleware 1...");
    next();
}
function m2(req,res,next){
    console.log(" running Middleware 2...");
    next();
}

app.listen(3555,()=>{
    console.log("Server started");
})