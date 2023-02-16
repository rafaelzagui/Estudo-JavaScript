import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-num');
const chkSimbolos = document.querySelector('.chk-simbolos');
const btnGerarSenha = document.querySelector('.gerarSenha');

export default () => {
    if (!btnGerarSenha) {
        console.error("ERRO NO BOTAO");
    }
    btnGerarSenha.addEventListener("click", () => {
        const txtSenha = document.createElement('a');
        senhaGerada.appendChild(txtSenha);
        txtSenha.innerHTML=`${gera()}`

    })
}

function gera() {
    const senha = geraSenha(qtdCaracteres.value, chkMaiusculas.checked, chkMinusculas.checked, chkNumeros.checked, chkSimbolos.checked);
    return senha
}