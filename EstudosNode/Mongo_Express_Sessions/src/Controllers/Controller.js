
exports.homePage=(req,res)=>{
    res.render('index');
    return;
};
exports.trataPost =(req,res)=>{
res.send(req.body);
return;
}