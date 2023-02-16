const persons= [
    {name: "Rafael", age:20},
    {name:"Carlos", age:21},
    {name:"Andrez", age:22}
];
const personsFilter = persons.map((obj,index)=>{
    const newObj = {id:index,...obj};
    return newObj;
})

console.log(personsFilter)