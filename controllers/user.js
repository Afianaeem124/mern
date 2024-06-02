const User=require("../models/user");

async function getAllUsers(req ,res){
    const allDBUsers=await User.find({});
    return res.json(allDBUsers)
}

async function getUsersByID(req ,res){
       //GET /api/user/1
 
const user=await User.findById(req.params.id)
return res.json(user)
}

async function patchUsersByID(req ,res){
    //GET /api/user/1
    const user=await User.findByIdAndUpdate(req.params.id,{name:"change"})
    return res.json({status:"success"})
}

async function deleteUsersByID(req ,res){
    //GET /api/user/1
    await User.findByIdAndDelete(req.params.id)
    return res.json({status:"success"})
}
async function handleCreateNewUser(req ,res){
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
          return res.status(201).json({msg:"success",id:result._id});

    }catch(error){
        if(error.code===11000)
        return res.status(400).json({msg:"Email already exists"});

    }
 
    return res.status(500).json({msg:"Internal server error"});
}


module.exports={getAllUsers,getUsersByID,patchUsersByID,deleteUsersByID,handleCreateNewUser}