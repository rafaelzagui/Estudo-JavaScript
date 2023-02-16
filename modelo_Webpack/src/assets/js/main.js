/*Codigo mais antigo
const request = obj=>{
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url,true);
        xhr.send();
        xhr.addEventListener('load',()=>{
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.responseText);
            }else{
              reject(xhr.statusText)
            }
        })
    })
    
}*/
 async function carregaPagina(el){
    const href = el.getAttribute('href');
    const res = await fetch(href);
   
    if(res.status!== 200)throw new Error('ERROR 404');
    const html = await res.text()
    carregaResultado(html)
   /*Metodo sem async e await 
   request(objConfig).then(response=>{
        carregaPagina(response);
    }).catch(err=>{
        console.log(err);
    })*/
}
const carregaResultado = (response) =>{
const resultado = document.querySelector('.resultado');
resultado.innerHTML = response;
}
document.addEventListener('click', e=>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el)
    }
})