console.log(process.argv.slice(2))

console.log(process.cwd()) 

console.log(process.env.PORT) 

console.log(process.pid); 

console.log(process.platform) 

const os = require('os');

console.log(os.cpus().length);

console.log(process.pid);

const child_process = require('child_process');

let child = child_process.exec('node child.js',(error,stdout,stderr) => {
    if(error){
        throw error
    }
    console.log("==stdout===",stdout)  
    console.log("stderr",stderr)  
})

console.log(child.pid)

let child2 = child_process.spawn('node',['child.js']);

child2.stdout.on('data',(data) => {
    console.log('stdout',data.toString())
})

child2.stderr.on('data',data => {
    console.log('stderrr',data.toString());
})

console.log(child2.pid)












