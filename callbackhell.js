// console.log("start script");

// function walkinres(){
//     setTimeout(() => {
//         console.log("i am going to restaurant");
//     }, 3000);
// }
// function checkmenu(){
//     setTimeout(() => {
//         console.log("i am checking menu");
//     }, 2000);
// }

// walkinres();
// checkmenu();
// console.log("something");
// console.log("something");
// console.log("something");

console.log("start script");

function walkinres(cb){
    console.log("i am walking to restaurant");
    setTimeout(cb, 3000);
}

function checkmenu(cb){
    console.log("i am checking menu");
    setTimeout(cb, 2000);
}
function orderfood(cb){
    console.log("i am ordering food");
    setTimeout(cb, 5000);
}

function havinglunch(cb){
    console.log("i am having food");
    setTimeout(cb, 6000);
}
function paybill(cb){
    console.log("i am paying bill");
    setTimeout(cb, 7000);
}
function walkout(){
    console.log("i am walking out of restaurant");
    
}


walkinres(()=>{
    checkmenu(() => {
        orderfood(() => {
            havinglunch(() => {
                paybill(() => {
                    walkout();
                    // walkout(() => {
                    //     console.log("i am done with my restaurant visit");
                    // });
                });
            });
        });
    });
});
// checkmenu();
console.log("something");
