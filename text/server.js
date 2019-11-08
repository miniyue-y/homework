const http = require('http');

const server = http.createServer((req,res) => {

})

setTimeout(() => {
    console.log(process.uptime())
},2000)

server.listen(process.env.PORT || 3000,() => {
    console.log(process.pid)
    console.log("服务启动成功")
})
