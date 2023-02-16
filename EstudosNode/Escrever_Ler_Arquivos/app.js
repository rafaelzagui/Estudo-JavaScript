const path = require('path');
const caminhoArq = path.resolve(__dirname,'teste.json');
const ler = require('./modules/ler')
async function lerArquivo(caminho){
    const dados = await ler(caminho);
    renderizaDados(dados);
}
function renderizaDados(dados){
    dados =JSON.parse(dados);
    dados.forEach(element => {
        console.log(element)
    });
}
lerArquivo(caminhoArq)

//ESCREVER ARQUIVO
//const escreve = require('./modules/escrever');
/*const pessoas = [
    {nome:'Rafael'},
    {nome:'Luiz'},
    {nome:'Eduardo Silva'},
    {nome:'Luiza'}
];
const json = JSON.stringify(pessoas,'',2);
escreve(caminhoArq, json)*/