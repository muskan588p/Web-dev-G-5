let arr=[1,2,3,4,5];

// const initialvalue=0;
// const sumwithinitialvalue  = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialvalue);
// console.log(sumwithinitialvalue); // Output: 10


// PROTOTYPE METHOD

function logic(accumulator, currentValue) {
    return accumulator + currentValue;
}
Array.prototype.reduceReplica=function(logic, initialvalue) {     //param1=callback function, param2=initial value


    let res = initialvalue;
    for(let i=0; i<this.length; i++){
        res = logic(res, this[i]);
    }
    return res;
}
const myprotodata=arr.reduceReplica ((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(myprotodata); 