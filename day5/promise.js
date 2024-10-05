const fetchData=new Promise ((resolve,reject)=>{
    setTimeout(() => {
        const data={id:1,name:"jitendra"};
        resolve(data);
    }, 1000);
}); 
console.log(fetchData);

//chaining
fetchData
.then((data)=>{
console.log("Data recived",data);
return data.id;
})

.then((id)=>{
 console.log("ID",id);
});