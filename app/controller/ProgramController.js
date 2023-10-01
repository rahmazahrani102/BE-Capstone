const daftar = require('../models/daftar-program')

function addData(req,res,next){
    daftar.create({
        nama: req.body.nama ,
        email: req.body.email,
        umur: req.body.umur,
        jenjang_sekolah: req.body.jenjang_sekolah,
        kode_promo: req.body.kode_promo
    })

    .then(function(){
        res.status(201).json({
            message: "pendaftaran berhasil"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
    return
}

function program(req,res,next){
    res.json({
        message: "halo ini zahra!"
    })

    return
}
module.exports = {
    program,
    addData
}