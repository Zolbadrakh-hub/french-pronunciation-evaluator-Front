const Conn = require('../config/db');

const mongoose = require('mongoose');

const wavSchema = new mongoose.Schema ( {
    name: String,
    transcription: String,
    wav: {
        data: Buffer,
        contentType: String
    }
});

module.exports = new mongoose.model('WavFiles', wavSchema);