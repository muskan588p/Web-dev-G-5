// var fees=30000;


function studentdetails(name, fees, logicfnc) {
    // console.log(`Name: ${name}`);
    // console.log(`Fees: ${fees}`);
    return logicfnc(name, fees);
}

function emi(name, fees) {
    return "name : " + name + ", with emi : " + fees / 10;
}

function welcome(name, fees) {
    // return `Welcome, ${name}! with fees, ${fees} and emi is ${fees / 10}`;       //1 way
    var a= `Welcome, ${name}! with fees, ${fees} and emi is ${fees / 10}`;          //2 way
    return a;
}
//if we do console.log and not return then undefiend will print

console.log(studentdetails("muskan", 30000, welcome));s
console.log(studentdetails("muskan", 30000, emi));
