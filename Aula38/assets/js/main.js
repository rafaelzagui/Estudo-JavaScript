function Calculadora() {
    this.display = document.querySelector('.display');
    this.inicia = () => {
        this.capturaClique()
    };
    this.capturaClique = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            console.log(el)
            if (el.classList.contains('btn-num'))this.addNumDisplay(el);
            if (el.classList.contains('btn-clear'))this.clearDisplay();
            if(el.classList.contains('btn-eq'))this.realizaConta(el);
            if(el.classList.contains('btn-del'))this.deleteOne(el)
        })
    };
    this.deleteOne = (el)=>{
        
    }
    this.clearDisplay =()=> this.display.value = ''
    this.addNumDisplay = el => this.display.value += el.innerText; 
    ;
    
}

const c1 = new Calculadora();
c1.inicia()