const express = require("express");
const app = express();
const port = 3000;
// const routerBird = require("./router.js");

// app.use('/abcd', routerBird)
// // app.use(m1);


// app.get("/", (req,res)=>{
//   res.send("THIS IS HOME PAGE");
// })

// app.post("/", (req,res)=>{
//   res.send("THIS IS HOME POSTPAGE");
// })

// app.put("/", (req,res)=>{
//   res.send("THIS IS HOME PUTPAGE");
// })


/////////////// MIDDLEWARES 

// const myLogger = function (req, res, next) {
//   console.log('LOGGED')
//   next()
// }

// app.use(myLogger)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/home', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/books', (req, res) => {
//   res.send('Hello World!')
// })

// app.use("/", (req,res)=>{
//   console.log("THIS IS ERROR HANDLER");
//   res.status(500).send("ERROR OCCCURED");
// })


// APPLICATION LEVEL


app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

app.get('/user/:id', (req, res, next) => {
  // res.send('USER')
  throw Error("THIS IS ERROR");
})

//ERROR HANDLER
app.use((err, req, res, next) => {
  // console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.use("/", (req,res)=>{
  console.log("NOT FOUND");
  res.status(404).send("ENTER CORRECT PATH");
})

// app.use("/", (req,res)=>{
//   console.log("THIS IS ERROR HANDLER");
//   res.status(500).send("ERROR OCCCURED");
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});