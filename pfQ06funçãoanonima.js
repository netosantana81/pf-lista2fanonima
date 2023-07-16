//função anonima 
const exec=(f,a,b,c)=>f(a,b,c)    
const res1=exec((a,b,c) =>{
if (a == b && b == c && c == a)
return "todos são iguais"
  else  if (a != b && b != c && a != c)
return "todos diferentes"
 else
return "apenas um diferente"
},8,8,8)
  console.log (res1)