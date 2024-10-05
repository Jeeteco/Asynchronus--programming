async function fetchData(){
    try{
        const data=await new Promise((resolve,reject)=>{
            setTimeout(()=>{
                reject('Error fecthing data');

            },1000)
        });
        console.log(data);
    }
    catch(error){
        console.error("caught an error",error);
    }
}
fetchData();