const express = require("express");
const dotenv=require("dotenv");
const connectDB=require("./config/db")
const colors=require("colors");
const userRoutes=require("./routes/userRoutes");
const {errorHandler,notFound}=require('./middleware/errorMiddleware')
var cors = require('cors');

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/user',userRoutes);
app.use(notFound);
app.use(errorHandler);
const port=process.env.PORT || 9000;
// const chats=require("./data/data")
// app.get("/",(req,res)=>{
//     res.send("api is running");
// });
// app.get("/api/chat",(req,res)=>{
//     res.send(chats);
// });
app.listen(port,console.log("server started on port 9000".yellow.bold));