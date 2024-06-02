const {logReqRes}=require("./middleware/usermiddleware")

const userRouter=require("./routes/user")
const{connectMongoDb}=require("./connection")
const express=require("express");
const app=express();

const PORT=8000;

 //connection
 connectMongoDb("mongodb://127.0.0.1:27017/practice-app").then(()=>
console.log("mongo db connected "));


////Middleware-Plugin
app.use(express.urlencoded({extended:false}));
app.use(express.json()); // Add this to parse JSON bodies
app.use(logReqRes('log.txt'))
//route 
app.use("/api/users",userRouter);
//////
app.listen(PORT,()=>console.log("server started at port:"+PORT))