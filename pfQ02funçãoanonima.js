//funçaõ anonima
const exec=(f,raio,pi)=>f(raio,pi)

const area=exec((raio,pi=3.14)=>pi*raio*raio,5)

console.log(area)