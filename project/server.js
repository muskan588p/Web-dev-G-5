const express = require("express");
require("dotenv").config();

//IMPORT DB CONNECTION
const dbConnect = require("./config/database");

const userRouter = require("./routes/userRoutes");

const app = express();

const PORT = process.env.PORT || 4888;

app.use(express.json());


//WE WILL MAKE ROUTES

app.use("/api/user",userRouter)

//error handler
app.use("/", function (req,res){
  res.status(500).json({message: err.message});
})



dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
  });
});