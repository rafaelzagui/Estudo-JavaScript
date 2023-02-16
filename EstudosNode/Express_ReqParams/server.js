const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send(`
    <form action="/" method="POST">
    Nome:<input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
})
app.get('/testes/:idUser?/:param?',(req,res)=>{
console.log(req.params);
res.send(req.param)
});
app.post('/',(req,res)=>{
    res.send('Recebi o Formulario');
});
app.get('/contato',(req,res)=>{
    res.send('Obrigado por entrar em contato');
});
app.listen(3000,()=>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor rodando na porta 3000')
})