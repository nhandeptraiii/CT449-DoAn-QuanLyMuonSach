const mongoose = require('mongoose');

const NhanVienSchema = new mongoose.Schema({
    MSNV: {
        type: String,
        required: true,
        unique: true
    },
    hoTenNV: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    chucVu: {
        type: String,
        required: true
    },
    diaChi: {
        type: String,
        required: true
    },
    soDienThoai: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('NhanVien', NhanVienSchema);