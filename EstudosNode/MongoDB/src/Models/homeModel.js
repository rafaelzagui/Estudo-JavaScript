const moongose = require('mongoose');

//tratamento de dados para se colocar no mongodb
const HomeSchema = new moongose.Schema({
    titulo: {type: String, required:true},
    descricao: String
});

const HomeModel = moongose.model('Home',HomeSchema);

class Home{}

module.exports=Home