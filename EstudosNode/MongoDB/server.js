require('dotenv').config();
const express = require('express');
const app = express()
const routes =require('./routes');
const path = require('path');
const meuMiddleware = require('./src/Middlewares/middleware');
const mongoose  = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{app.emit('pronto')})
.catch(e => console.log(console.log(e)))
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
app.set('views',path.resolve(__dirname,'src','views'));
app.set('view engine','ejs');
app.use(meuMiddleware)
app.use(routes);

app.on('pronto',()=>{
    app.listen(3000,()=>{
        console.log('Acessar http://localhost:3000');
        console.log('Servidor rodando na porta 3000')
    })
})
