const pessoas = [
    {id:2,nome:"rafael"},
    {id:3,nome:"Eldo"},
    {id:1,nome:"Fernando"}
]

const novasPessoas= new Map;

for (const pessoa of pessoas)
{
    const {id} = pessoa;
    novasPessoas.set ( id,{...pessoa})
}
console.log(novasPessoas)