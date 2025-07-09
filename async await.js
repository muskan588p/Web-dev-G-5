// async function fetchdata(){
//     const data = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const finaldata = await data.json();
//     console.log(finaldata);
    
    
// }
// fetchdata();

const promise1=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});

async function checkPromise() {
    const promisedata = await promise1;
    console.log(promisedata);
}

checkPromise();