const fs=require("fs");
// //sync 
// fs.writeFileSync('./ESY.txt',"hfhjfhdfd");
// //async
// fs.writeFile('./ESY.txt',"hfhjf",(err)=>{})
// const res=fs.readFileSync("./afia.txt","utf-8");
// console.log(res);

// fs.readFile("./afia.txt","utf-8",(err,res)=>{
//     if(err){
//         console.log("err",err);
//     }else{
//         console.log(res);

//     }
// });
// fs.appendFileSync("./afia.txt",Date.now() +'hey there \n');
// fs.cpSync("./afia.txt","./copy.text");
// fs.unlinkSync("./copy.text")
// console.log(fs.statSync("./afia.txt"))
fs.mkdirSync('mydocs/a',{recursive:true})