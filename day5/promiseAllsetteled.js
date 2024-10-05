const p1=Promise.resolve("Success");
const p2=Promise.reject("Failure");
Promise.allSettled([p1,p2])
.then((results)=>{
    console.log(p1,p2);
    // results.forEach((result)=>console.log(result.status));
    results.map((result=>console.log(result.status)));
})