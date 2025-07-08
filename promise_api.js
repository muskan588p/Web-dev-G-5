const mypromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Ambala");
    }, 2000);
});
const mypromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Mohali");
    }, 2000);
});
const mypromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Ludhiana");
    }, 2000);
});

Promise.all([mypromise1, mypromise2, mypromise3]);
// Promise.all([mypromise1, mypromise2, mypromise3]);
// Promise.all([mypromise1, mypromise2, mypromise3]);

mypromise1.then ((res) => {
    console.log(res);
    
    mypromise2.then((res) => {
        console.log(res);
        
        mypromise3.then((res) => {
            console.log(res);
        }).catch((err) => {
            console.error("Error in promise3:", err);
        });
    }).catch((err) => {
        console.error("Error in promise2:", err);
    });
}).catch((err) => {
    console.error("Error in promise1:", err);
});

//Promise.all([mypromise1, mypromise2, mypromise3]);
//all promises are giving output at once if all are resolved:
//if either one of the promise get rejected,then error will come and no promise will get executed
//if all the rejected , then error will come and no promise will get executed
//if all the promises are resolved, then all the promises will get executed and output will come

Promise.allSettled([mypromise1, mypromise2, mypromise3]);
//if all the promises are resolved, then all the promises will get executed and output will come
//if either one of the promise get rejected, then error will come but its above promise output will come
//if all the rejected , then error will come but its above promise output will come