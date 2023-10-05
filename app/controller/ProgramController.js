const daftar = require('../models/daftar-program')
const content = require('../models/content-program')

function addData(req,res,next){
    if(req.body.nama == "" || req.body.email == "" || req.body.umur == "" || req.body.jenjang_sekolah == "" || req.body.pilih_program == ""){
        res.status(400).json({
            message: "Silahkan Isi Data Anda Terlebih Dahulu"
        })
        return
    }

    daftar.create({
        nama: req.body.nama ,
        email: req.body.email,
        umur: req.body.umur,
        jenjang_sekolah: req.body.jenjang_sekolah,
        kode_promo: req.body.kode_promo,
        pilih_program: req.body.pilih_program
    })

    .then(function(){
        res.status(201).json({
            message: "Pendaftaran Berhasil. Terima Kasih Telah Mendaftar"
        })
    })
    .catch(function(err){
        res.status(500).json({
            error: err,
        })
    })
    return
}

function getContentData(req,res){
    content.findAll()
    .then(data =>{
        res.send(data);
    })
    .catch(err => {
        console.error('Gagal mengambil data dari model: ' + err.message);
        res.status(500).send('Terjadi kesalahan saat mengambil data dari model.');
    });
}


module.exports = {
    addData,
    getContentData
}