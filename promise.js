const p1=new Promise((resolve, reject) => {
    setTimeout(()=>{
        const data=["mago","banaan",123];
        console.log("fetchig the data");
        resolve(data)
    },1000)
   
})
console.log(p1);

p1 
.then((data)=>{
    console.log("dta info");
})
.catch((error)=>{
    console.log("fllown error is",error.message);
})