require('dotenv').config();
const express = require('express');
const app = express()
const routes =require('./routes');
const path = require('path');
const meuMiddleware = require('./src/Middlewares/middleware');
const mongoose  = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING,{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{app.emit('pronto')})
.catch(e => console.log(console.log(e)));

// Bibliotecas node para captação de sessões do navegadores
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash')

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')))
const sessionOptions = session({
secret:'SomosPorcoMuitoLouco',
store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
resave: false,
saveUninitialized:false,
cookie:{
    maxAge: 1000 * 60 * 60 * 24 * 7, //quanto tempo em milesimos de segundo meu cookie vai durar(* 60(segundo) * 60(hora) * 24(hrs/dia) * 7(dias))
    httpOnly: true
}
})
app.use(sessionOptions)
app.use(flash())

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
