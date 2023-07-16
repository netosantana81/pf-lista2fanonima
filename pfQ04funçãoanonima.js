//função anonima
const exec=(f,la,lb,lc)=> f(la,lb,lc)
const res1=exec(( la, lb ,lc )=> {
if (la == lb && la == lc && lb== lc ) 
return " Equilatero"
if ( la!== lb && la !== lc && lb !== lc) 
    return "Escaleno"
 else  
return "Isósceles"
},2,4,4)
console.log(res1)
