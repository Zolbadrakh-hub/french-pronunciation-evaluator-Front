const express = require("express");
const router = express.Router();


const {
    getAudios,
    getAudio,
    createAudio,
    updateAudio,
    deleteAudio,
} = require("../controller/audiofiles");


router.route("/").get(getAudios).post(createAudio);

router.route("/:id").get(getAudio).put(updateAudio).delete(deleteAudio);

module.exports = router;
