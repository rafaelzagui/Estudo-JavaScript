const fs = require('fs').promises;

module.exports=(caminhoArq,json)=>{
    fs.writeFile(caminhoArq,json,{flag: 'w'})
}



