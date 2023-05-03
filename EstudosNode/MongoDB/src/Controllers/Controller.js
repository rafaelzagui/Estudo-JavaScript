const HomeModel = require('../Models/homeModel');

HomeModel.create({
titulo:'Um titulo de teste',
descricao:'Uma descricao teste'
}).then(dados=>console.log(dados))
.catch(e => console.log(e));

exports.homePage=(req,res)=>{
    res.render('index');
    return;
};
exports.trataPost =(req,res)=>{
res.send(req.body);
return;
}