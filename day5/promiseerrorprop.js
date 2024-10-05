const fetchData=new Promise ((resolve,reject)=>{
    setTimeout(() => {
        const data={id:1,name:"jitendra"};
        resolve(data);
    }, 1000);
}); 


fetchData
.then((data)=>{
 throw new Error('something went wrong ');
})
.catch((error)=>{
    console.error("Caught Error:",error.message);
})