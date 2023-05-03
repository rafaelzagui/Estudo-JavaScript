module.exports = (req,res,next)=>{
    console.log();
    if(req.body.cliente){
        console.log(`CLiente: ${req.body.cliente}`);
    }
    console.log();
    next();
}
