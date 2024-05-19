const express = require("express");
const cors = require("cors");
const connectDB = require('./connectDB.js');
const userRoutes = require("./routes/userRoute.js");
const catRoutes = require("./routes/catRoute.js");

const app = express();
const port = process.env.PORT

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/user",userRoutes);
app.use("/cats",catRoutes);

connectDB.connectDB();

app.listen(port, ()=>{
    console.log("Server is running and listening on port",port);
});

