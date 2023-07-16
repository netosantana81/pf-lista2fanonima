//função anonima

const exec=(f,x,y,z)=> f(x,y,z)

const res1=exec((x,y,z)=>{if(x<y+z&&y<x+z&&z<x+y)
return "é um triângulo"  
else return "não é um triangulo"},14,5,6) 

console.log(res1)