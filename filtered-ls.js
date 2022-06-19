const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const extension = `.${process.argv[3]}`

fs.readdir(dir, (err,list)=>{
    list.forEach(file=>{
        if (path.extname(file)===extension){
            console.log(file)
        }
    })
})