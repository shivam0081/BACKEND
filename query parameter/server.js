const express=require("express");

const app=express();

// app.get("/profile",(req,res)=>{
    // const {username} =req.query;
    // res.send("profile page of "+" "+username)
// })
// app.get("/profile",(req,res)=>{
    // const {username,age,state} =req.query;
    // res.send("profile page of "+" "+username+ " "+age+" "+state)
// })
let userData=[{
    id:1,
    Name:"shivam",
    address:"Madhya Pradesh"
},
{
    id:2,
    Name:"Ronak",
    address:"Punjab"
},
{
    id:3,
    Name:"yudish",
    address:"Bhatinda"
}]
app.get("/allusers",(req,res)=>{
    res.send(userData);
}) 
app.get("/getuserbyID",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<usersData.length;i++){
        if(userDate[i].id==id){
            return res.send(userData[i]);
            
        }}
        res.send("user not found");
})
app.get("/deleteusserbyId",(req,res)=>{
    let {id}=req.query;
    for(let i=0;i<userData.length;i++){
        if(userData[i].id==id){
            userData.splice(i,1);
            return res.send("user deleted");
        }
    }
    res.send("user not found");
})
// app.get("/adduser",(req,res)=>{
//     let {id,name,address}=req.query;
//     userData.push({id:id,name:name,address:address});
//     res.send("user added");

// })
app.get("/adduser",(req,res)=>{
    let {id,name,address}=req.query;
    let newUser={
        id:id,
        name:name,
        address:address
    }
    userData.push(newUser);
    res.send("New user added");
})

app.listen(4567,()=>{
    console.log("server started");
});