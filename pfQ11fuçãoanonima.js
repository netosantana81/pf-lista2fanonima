//função anonima
const exec=(f,a,b,c)=>f(a,b,c)     
    const res1 = exec((a,b,c)=>{
    const media = (a+b+c)/3 
    
    if (a>media && b>media)
    return `${a}e${b}  são maiores que o valor médio ` +media
       
    if (a>media && c>media)
    return `${a} e ${c} são maiores que o valor médio ` +media
   
    if (b>media && c>media)
    return `${b} e ${c} são maiores que o valor médio ` +media
    
    if (a>media)
     return a + " é maior que o valor médio "+media
    
    if (b>media)
    return b + " é maior que o valor médio "+media
    
    if (c>media)
    return c + " é maior que o valor médio "+media
    
    else 
     return " nenhum valor é maior que a média "+media 
    },5,9,8)
       
    console.log (res1)