const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 4888;

app.use(express.json());

app.use(function(req,res,next){
  console.log("THIS IS GLOBAL APP MIDDLWARE");
  next()
})

//endpoints=user

app.get("/",(req,res)=>{
  res.send({message:"THIS IS DASHBOARD"})
})

app.use("/api/user",userRouter)


async function dbConnect() {
  await mongoose.connect(process.env.CONNECTION_URI).then(() => {
    console.log("DB CONNECTED");
  });
}

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});