class ValidaForms{
    constructor(){
        this.formulario = document.querySelector('.forms');
        this.eventos()
    }
    eventos(){
        this.formulario.addEventListener('submit', e=>{
            this.handleSubmit(e);
        })
    }
    handleSubmit(){
        e.preventDefault();
        console.log('Formulario não enviado')
    }
}

const forms = new ValidaForms()