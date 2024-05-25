// console.log('hello node lets start this journey');

// function myHandler(req,res){
  
//     const log=Date.now()+" "+req.url+req.method+'new Request\n'
//     const Myurl=url.parse(req.url,true);
   
//     fs.appendFile("./log.txt",log,(error,response)=>{
//         switch (Myurl.pathname) {
//             case "/":
//                 if(req.method=='GET')
//                 res.end("hello homepage");
//                 break;
//                 case "/about":
//                     const myname=Myurl.query.myname;
//                     const myoffice=Myurl.query.office;
//                     res.end("hello im   "+myname+ " my office is "+myoffice);
//                     break;
//                     case "/icon":
//                         res.end("hello icon");
//                         break;
//                         case "/signup":
//                             if(req.method=='GET')
//                                 res.end("this is signu form");
//                             break;
//             default:
//                 res.end("404 Not Found");
//                 break;
//         }
        
//     })
  
    


// }
// const myServer=http.createServer(myHandler)

// myServer.listen(8000,()=>console.log("server started"));