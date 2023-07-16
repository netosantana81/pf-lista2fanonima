//função anonima 
const a= "Mary"
const b= "Jane"
const exec=(f,x,y)=>f(x,y)
const res1=exec((x,y) => `${y},${x[0]}.`,a,b)
console.log(res1)