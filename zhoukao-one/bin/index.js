#! /usr/bin/env node

const path = require('path');

const fs = require('fs');

let param = process.argv[2] && process.argv[2].slice(1);

let url = path.join(process.cwd(),param); 


if(fs.existsSync(url)){
    if(fs.statSync(url).isDirectory()){
        let dirList = fs.readdirSync(url); 
        dirList = dirList.map(item => {
            let extname = path.extname(item) ? path.extname(item).slice(1) : '';
            let size = fs.statSync(path.join(url,item)).size;
            return `${item}-${extname ? extname :''}-${size?size:''}`
        })
        
        console.log(dirList)
    }else{
        console.log(parma);
    }
}else{
    console.log("此路径不存在")
}
