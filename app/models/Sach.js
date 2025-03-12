const mongoose = require('mongoose');

const SachSchema = new mongoose.Schema({
    maSach: {
        type: String,
        required: true,
        unique: true
    },
    tenSach: {
        type: String,
        required: true
    },
    donGia: {
        type: Number,
        required: true
    },
    soQuyen: {
        type: Number,
        required: true
    },
    namXuatBan: {
        type: Number,
        required: true
    },
    maNXB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'NhaXuatBan',
        required: true
    },
    tacGia: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Sach', SachSchema);