// import
const express = require("express");
const connectDB = require("./config/connectDB");
// --------------------------------------------------------
// instance app all express method
const app = express();
// require the env variables
require("dotenv").config();
// -----------------------------------------------------------
// connect with the database
connectDB();
// -------------------------------------------------
// route
// middleware globale to read body
app.use(express.json());
// middleware to the contacts route
app.use("/api/contact", require("./router/contact"));
// ------------------------------------------------------------------------------
// create server
// port
const PORT = process.env.PORT;
// create server
app.listen(PORT, () => console.log("server is running on PORT", PORT));
