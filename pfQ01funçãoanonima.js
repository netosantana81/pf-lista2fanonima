//função anonima
const exec=(f,b,h)=>f(b,h)

const areatriangulo=exec((b,h)=> b*h,3,4)

const texto = `O tamanho da área do retângulo é ${areatriangulo} .`
console.log(texto)