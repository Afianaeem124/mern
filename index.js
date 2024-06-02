const mongoose=require("mongoose");
const fs=require("fs");

const express=require("express");
const app=express();
const PORT=8000;

//Connection
mongoose.connect('mongodb://127.0.0.1:27017/practice-app')
.then(()=>console.log('MongoDB Connected'))
.catch((err)=>console.log('Mongo Error ',err))
//Schema
const userSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    name:{
        type:String,

    },
    email:{
        type:String,
        //required:true,
        unique:true 
    },
    phone:{
        type:Number
    }
},{timestamps:true});
//Model
const User=mongoose.model('user',userSchema);

////Middleware-Plugin
app.use(express.urlencoded({extended:false}));
app.use(express.json()); // Add this to parse JSON bodies
app.use((req,res,next)=>{
    fs.appendFile("log.txt",`\n${Date.now()}:${req.ip} ${req.method}: ${req.path}\n`,
(err,data)=>{
    next();
})
})
// Routes

//HTML RENDERING
app.get("/users", async(req, res) => {
    const allDBUsers=await User.find({});
   // const usernames = users.map((user) => user.name);
    const html = `<ol>${allDBUsers.
        map((user) => `<li>${user.name} - ${user.email}</li>`).join('')}</ol>`;
    res.send(html);
  });
//GET /api/user-List all users JSON -Done
app.get("/api/users",async(req, res)=>{
    const allDBUsers=await User.find({});
    return res.json(allDBUsers)
    });

app.route("/api/users/:id").get(async(req, res)=>{
    //GET /api/user/1
//GET /api/user/2
   
    const user=await User.findById(req.params.id)
    return res.json(user)
    //PATCH /api/user/1
    }).patch(async(req,res)=>{
        
    const user=await User.findByIdAndUpdate(req.params.id,{name:"change"})
    return res.json({status:"success"})
        //DELETE /api/user/1
    }).delete(async(req,res)=>{
         
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"success"})
      
    })

//POST /api/users
// app.post("/api/users",(req,res)=>{
//     const body=req.body;
//     users.push({...body,id:Date()});
//     fs.writeFile('./mockusers.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status:"success",id:users.lenght+1});
//     });
  
// });
app.post("/api/users",async(req,res)=>{
    const body=req.body;
    if(!body ||!body.username||!body.name||!body.email||!body.phone){
        return res.status(400).json("All feilds must be filled")
    }
    try{
        const result= await User.create({
            username:body.username,
            name:body.name,
            email:body.email,
            phone:body.phone
           });
          return res.status(201).json({msg:"success"});

    }catch(error){
        if(error.code===11000)
        return res.status(400).json({msg:"Email already exists"});

    }
 
    return res.status(500).json({msg:"Imternal server error"});
});

app.listen(PORT,()=>console.log("server started at port:"+PORT))