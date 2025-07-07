const words=["hello","world","javascript","map","function"];


// const result=words.filter((word) => word.length > 5);
// const result=words.mapReplica((word) => word.length > 5);

// console.log(result); // Output: ["javascript", "function"]

//USING PROTOTYPE METHOD


// function logic(word) {
//     return word.length > 5;
// }

// Array.prototype.mapReplica = function(logic){
//     let outputarr=[];
//     for(let i=0; i<this.length;i++){
//         outputarr.push(logic(this[i]));
//     }
//     return outputarr;
// }

// const myprotodata = words.mapReplica(logic);
// console.log(myprotodata); 

function logic(word) {
    return word.length > 5;
}

Array.prototype.mapReplica = function(logic){
    let outputarr=[];
    for(let i=0; i<this.length;i++){
        if(logic(this[i])) {
            outputarr.push(this[i]);
        }
    }
    return outputarr;
}

const myprotodata = words.mapReplica(logic);
console.log(myprotodata); 

