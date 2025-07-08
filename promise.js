const mypromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved after 2 seconds");   //reject("Promise rejected after 2 seconds");
    },2000);        
});

console.log(mypromise);    //Promise { <pending> }
//but after 2 seconds it will be resolved and result will come

//to show in console we will use then catch method
mypromise
.then((res)=> console.log(res))
.catch((err)=> console.log(err));


