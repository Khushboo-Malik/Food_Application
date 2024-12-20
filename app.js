require("dotenv").config();

const mongoose=require("mongoose");
const express = require("express");
const { connectMongoDb } = require("./connection");

const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const userRoutes=require("./routes/user.js");
app.use("/user",userRoutes);



connectMongoDb(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected!"));

app.listen(PORT, () => console.log(`Server Started at PORT ${PORT}!`));