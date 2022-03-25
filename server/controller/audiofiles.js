exports.getAudios = (req,res, next) => {
    res.status(200).json({
        success: true,
        data: "Бүх аудиог энд өгнө",
    });
};

exports.getAudio = (req,res, next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID -тэй аудиогийн мэдээллийг өгнө`
    });
};

exports.createAudio = (req,res, next) => {
    res.status(200).json({
        success: true,
        data: "Шинээр аудио үүсгэх"
    });
};

exports.updateAudio = (req,res, next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID-тай аудиог өөрчилнө`,
    });
};

exports.deleteAudio = (req,res, next) => {
    res.status(200).json({
        success: true,
        data: `${req.params.id} ID-тай аудиог устгана`,
    });
};