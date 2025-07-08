const mypromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Placement lag gyi");
    }, 2000);
});
const mypromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("party hogyi");
    }, 3000);
});
const mypromise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("joining hogyi");
    }, 4000);
});
const mypromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("doing work");
    }, 5000);
});
const mypromise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("layoff hogya");
    }, 6000);
});

// mypromise1
// .then(() => {setTimeout(() => {
//     console.log("All promises executed successfully");
// }, 7000);   
// })
// if we write all then like ths one below other, then all will execute together

mypromise1.then((res) => {
    console.log(res);
    
    mypromise2.then((res) => {
        console.log(res);
        
        mypromise3.then((res) => {
            console.log(res);
            
            mypromise4.then((res) => {
                console.log(res);
                
                mypromise5.then((res) => {
                    console.log(res);
                }).catch((err) => {
                    console.error("Error in promise5:", err);
                });
            }).catch((err) => {
                console.error("Error in promise4:", err);
            });
        }).catch((err) => {
            console.error("Error in promise3:", err);
        });
    }).catch((err) => {
        console.error("Error in promise2:", err);
    });
})


// function place(placement, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("PLACEMENT LG GYI" + placement);
//             console.log("PLACEMENT LG GYI " + placement);
//         }, delay);
//     });
// }

// place("placement lg gyi", 2000)
// .then(()=>place("party hogyi", 3000))
// .then(() => place("joining hogyi", 4000))
// .then(() => place("doing work", 5000))
// .then(() => place("layoff hogya", 6000))
// .catch((err) => {
//     console.error("Error:", err);
// });

// har bar new promise ban rha hai