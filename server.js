var http= require("http");
var url= require("url");
var fs=require("fs");

http.createServer(function(req,res){
    if(req.url === "/favicon.ico"){
        res.writeHead(200);
        console.log("Favicon request");
    }
    else{
        var data= url.parse(req.url, true).query;
        var final_data= "Name: "+data.name +" Mail: "+data.mail+"\n";

        fs.appendFile("./sample.txt",final_data,function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("Data appended");
            }
        })
    }
    res.end("The data is appended successfully.");
}).listen(8000);