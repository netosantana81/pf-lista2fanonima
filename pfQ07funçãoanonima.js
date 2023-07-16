//Função anonima

const exec=(f,v1,v2)=>f(v1,v2)
    const a= 5
    const b= 2
    const c= 4
const res1 = exec((a,b) => a < b ? a : b , a, exec((a,b) => a < b ? a : b, b,c))

console.log(res1)