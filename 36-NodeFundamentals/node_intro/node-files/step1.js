const fs = require("fs")

function cat(path){
    fs.readFile(path, "utf8", (err, data) => {
        if(err){
            console.error(`Error reading ${path}: \n\tError: ENOENT: no such file or directory, open '${path}'`, err)
            process.kill(1)
        }
        console.log(data)
    })
}

cat(process.argv[2])