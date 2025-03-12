const mongoose = require('mongoose');

const TheoDoiMuonSachSchema = new mongoose.Schema({
    maDocGia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DocGia',
        required: true
    },
    maSach: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sach',
        required: true
    },
    ngayMuon: {
        type: Date,
        required: true,
        unique: true // Đặt ngayMuon là khóa chính
    },
    ngayTra: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('TheoDoiMuonSach', TheoDoiMuonSachSchema);