const mongoose = require('mongoose');

const DocGiaSchema = new mongoose.Schema({
    maDocGia: {
        type: String,
        required: true,
        unique: true
    },
    hoLot: {
        type: String,
        required: true
    },
    ten: {
        type: String,
        required: true
    },
    ngaySinh: {
        type: Date,
        required: true
    },
    phai: {
        type: String,
        required: true
    },
    diaChi: {
        type: String,
        required: true
    },
    dienThoai: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('DocGia', DocGiaSchema);