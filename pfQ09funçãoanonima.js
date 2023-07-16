//função anonima 
const exec=(f,x,y)=>f(x,y)
const res1=exec((x,y)=> {
    return (x || y) && !(x && y)
},false,true)
console.log(res1)