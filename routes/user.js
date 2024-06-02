const express=require("express");
const {getAllUsers,getUsersByID,patchUsersByID,deleteUsersByID,
    handleCreateNewUser
}=require("../controllers/user")

const router=express.Router();



//GET /api/user-List all users JSON -Done
router.route("/").get(getAllUsers).post(handleCreateNewUser);

router.route("/:id")
.get(getUsersByID).
patch(patchUsersByID).
delete(deleteUsersByID)




module.exports=router;
// router.get("/", async(req, res) => {
//     const allDBUsers=await User.find({});
//    // const usernames = users.map((user) => user.name);
//     const html = `<ol>${allDBUsers.
//         map((user) => `<li>${user.name} - ${user.email}</li>`).join('')}</ol>`;
//     res.send(html);
//   });
//POST /api/users
// router.post("/api/users",(req,res)=>{
//     const body=req.body;
//     users.push({...body,id:Date()});
//     fs.writeFile('./mockusers.json',JSON.stringify(users),(err,data)=>{
//         return res.json({status:"success",id:users.lenght+1});
//     });
  
// });