const http=require("http");

const server=http.createServer((req, res)=>{
    res.writeHead(200,{"Content-type":"text/plain"});         //text/html    //not plain/text
    res.end("data fetched response send");
})

server.listen(8000, ()=>{
    console.log("server connected");
})