// var cart=["shoes","shirt","jeans", "glasses"];
// var noOfitem = cart.length;
// var price=noOfitem*1000; 
// var orderid= Math.floor(Math.random() * 10000);

// function createorder(cart,cb){
//     console.log("Order created for items: " , cart);
//     setTimeout(2000, cb);
// }

// function placeorder(price, noOfitem){
//     setTimeout(() => {
//         console.log("Order placed with ID: " + orderid);
//     }, 3000);
// }

// function orderpayment(orderid, price, noOfitem){
//     console.log("Payment done for order ID: " + orderid + " with price: " + price);
//     setTimeout(cb,3000);
// }
// function orderstatus(){
//     return "price :" + price + " and no of items: " + noOfitem;
// }

// createorder(cart,()=>{
//     placeorder(price, noOfitem,()=>{
//         orderpayment(orderid, price, noOfitem,()=>{
//             orderstatus();
//         })
//     })
// })

var cart = ["shoes", "shirt", "jeans", "glasses"];
var noOfitem = cart.length;
var price = noOfitem * 1000;
var orderid = Math.floor(Math.random() * 10000);

function createorder(cart, cb) {
    console.log("Order created for items:", cart);
    setTimeout(cb, 2000);
}

function placeorder(price, noOfitem, cb) {
    setTimeout(() => {
        console.log("Order placed with ID:", orderid);
        cb();
    }, 3000);
}

function orderpayment(orderid, price, noOfitem, cb) {
    console.log("Payment done for order ID:", orderid, "with price:", price);
    setTimeout(cb, 3000);
}

function orderstatus() {
    console.log("Order status -> Price:", price, "and No of items:", noOfitem);
}

createorder(cart, () => {
    placeorder(price, noOfitem, () => {
        orderpayment(orderid, price, noOfitem, () => {
            orderstatus();
        });
    });
});
