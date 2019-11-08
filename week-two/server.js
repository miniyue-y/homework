const http = require('http');

const fs = require('fs');

let type = {
    '/json':'application/json',
    '/txt':'text/plain',
}

const server = http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type':type[req.url]});
    if(req.url === '/json'){
        res.end(JSON.stringify({code:1,list:[{'title':'title'}]})) 
    }else if(req.url === '/txt'){
        res.end('txt')
    }else{
        res.end("ok")
    }
})

server.listen(process.env.PORT || 3000)