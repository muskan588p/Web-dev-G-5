// console.log("start script");

// let arr=[1,2,3,4,5];

// // const newarr=arr.map((x) => {x*2});   //return undefined values due to {}
// const newarr=arr.map((x) => x*2);

// console.log(newarr);

//PROTOTYPE METHOD
let arr=[1,2,3,4,5];

function doubleData(x) {
    return x * x;
}

// Array.prototype.mapReplica=(logic)=>{
Array.prototype.mapReplica= function(logic){
    let outputarr=[];
    for(let i=0; i<this.length; i++){
        outputarr.push(logic(this[i]*2));
    }
    return outputarr;
}

const myprotodata=arr.mapReplica(doubleData);
console.log(myprotodata);

