const express = require('express');
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const multer = require("multer");

const wavModel = require("./models/models");

const audiosRoutes = require("./routes/audiofiles");
const connectDB = require('./config/db');
dotenv.config({path: './config/.env'});


connectDB();

const app = express();


app.use("/api/v1/audios", audiosRoutes, bodyParser.urlencoded(
    {
        extended: true
    }
));

app.set("view engine", "ejs");

//Set storage

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'upload')
    },
    filename: function (req, file, cb){
        cb(null, file.fieldname + "-" + Date.now())
    }
})

const upload = multer({ storage: storage })

app.get("/", (req, res) => {
    res.send("index");
})

app.post("/uploadwav",upload.single('myWav'),(req,res)=>{
    const wav = fs.readFileSync(req.file.path);
    const encode_wav = wav.toString('base64');
    const final_wav = {
        contentType:req.file.mimetype,
        Wav: Buffer(encode_wav,'base64')
    };
    wavModel.create(final_wav, function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result.wav.Buffer);
            console.log("Saved To database");
            res.contentType(final_wav.contentType);
            res.send(final_wav.Wav);
        }
    })
})


const server = app.listen(process.env.PORT || 8080, 
    console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа..`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Алдаа гарлаа : ${err.message}`);
    server.close(() => {
        process.exit(1)
    })
})