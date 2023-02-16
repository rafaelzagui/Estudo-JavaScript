const fs = require('fs').promises;
const { stat } = require('fs');
const path = require('path');
async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files,rootDir)
}
async function walk(files,rootDir){
    for(let file of files)
    {
        const fileFullPath = path.resolve(rootDir,file)
        const stats = fs.stat(fileFullPath)
        console.log(file, (await stats).isDirectory);
        if((await stats).isDirectory()){
            readdir(fileFullPath)
            continue
        }
    }
}
readdir('C:/Users/rafael.camargo/Desktop/Nova pasta/')
/*fs.readdir(path.resolve(__dirname))
.then(files=>console.log(files))
.catch(e=>console.log(e));*/
