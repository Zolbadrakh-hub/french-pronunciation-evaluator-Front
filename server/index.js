const express = require("express");
const dotenv = require("dotenv");
const connectDB = require('./config/db')
// Аппын тохиргоог process.env рүү ачаалах
dotenv.config({path: './config/config.env'});

const app = express();
connectDB();


app.listen(process.env.PORT, console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа...`))
