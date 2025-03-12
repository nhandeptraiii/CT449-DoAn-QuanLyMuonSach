const mongoose = require('mongoose');

const NhaXuatBanSchema = new mongoose.Schema({
    maNXB: {
        type: String,
        required: true,
        unique: true
    },
    tenNXB: {
        type: String,
        required: true
    },
    diaChi: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('NhaXuatBan', NhaXuatBanSchema);