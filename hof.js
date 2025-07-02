// function calculate(param1){
//     //param1();
//     console.log("Calculate the business logic")
//     param1();
    
// }

// var sumOfTwo=()=>{
//     console.log("Sum of 2 working");
// }
// calculate(sumOfTwo);




function calculate(logicFn,a,b){
    return logicFn(a,b);
}

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

console.log(calculate(add,3,5));