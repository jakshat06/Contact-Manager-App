const express =require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv=require("dotenv").config();
// const connectDb= require("./middleware/errorHandler");
const connectDb =require("./config/dbConnection");

connectDb();
const app=express();

const port =process.env.PORT || 5000;


app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler);



app.listen(port,()=>{
  console.log(`server running on port ${port}`); 
})