#! /usr/bin/env node

const path = require('path');

const fs = require('fs');

let i = 0;

let list = fs.readdirSync(process.cwd())

list.forEach((item,index) => {
    if(/.js$/.test(item)){
        i++;
        fs.renameSync(item,`index(${i}).js`)
    }
})