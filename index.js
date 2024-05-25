const http=require("http");
const fs=require("fs");
const myServer=http.createServer((req,res)=>{
    const log=Date.now()+" "+req.url+'new Request\n'
    fs.appendFile("./log.txt",log,(error,response)=>{
        switch (req.url) {
            case "/":
                res.end("hello homepage");
                break;
                case "/about":
                    res.end("hello im syeda afia naeem");
                    break;
                    case "/icon":
                        res.end("hello icon");
                        break;
        
            default:
                res.end("404 Not Found");
                break;
        }
        
    })
  
    
});
myServer.listen(8000,()=>console.log("server Started!"));