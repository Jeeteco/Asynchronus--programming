const p1=Promise.resolve("Error 1");
const p2=Promise.resolve("Sucess");
const p3=Promise.resolve('Error 2');

Promise.any(([p1,p2,p3]))
.then((value)=>{
    console.log(values);
})
.catch((error)=>{
    console.log("all promises are rejected")
})