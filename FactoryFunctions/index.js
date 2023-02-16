const falar = {
    falar() {
        console.log(`${this.nome} esta falando`)
    }
}
const pessoaProto={...falar}
function criaPessoa(nome, sobrenome) {
    return Object.create(pessoaProto, {
        nome: { value: nome },
        sobrenome: { value: sobrenome }
    })
}
const p1 = criaPessoa("Rafael", "Zagui")
console.log(p1)