const TheoDoiMuonSach = require('../models/TheoDoiMuonSach');

// Lấy danh sách tất cả các bản ghi mượn sách
exports.getAllBorrows = async (req, res) => {
    try {
        const borrows = await TheoDoiMuonSach.find();
        res.json(borrows);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm bản ghi mượn sách mới
exports.createBorrow = async (req, res) => {
    const borrow = new TheoDoiMuonSach({
        maDocGia: req.body.maDocGia,
        maSach: req.body.maSach,
        ngayMuon: req.body.ngayMuon,
        ngayTra: req.body.ngayTra
    });

    try {
        const newBorrow = await borrow.save();
        res.status(201).json(newBorrow);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Lấy thông tin bản ghi mượn sách theo ID
exports.getBorrowById = async (req, res) => {
    try {
        const borrow = await TheoDoiMuonSach.findById(req.params.id);
        if (borrow == null) {
            return res.status(404).json({ message: 'Không tìm thấy bản ghi mượn sách' });
        }
        res.json(borrow);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Cập nhật thông tin bản ghi mượn sách
exports.updateBorrow = async (req, res) => {
    try {
        const borrow = await TheoDoiMuonSach.findById(req.params.id);
        if (borrow == null) {
            return res.status(404).json({ message: 'Không tìm thấy bản ghi mượn sách' });
        }

        if (req.body.ngayTra != null) {
            borrow.ngayTra = req.body.ngayTra;
        }

        const updatedBorrow = await borrow.save();
        res.json(updatedBorrow);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xóa bản ghi mượn sách
exports.deleteBorrow = async (req, res) => {
    try {
        const borrow = await TheoDoiMuonSach.findById(req.params.id);
        if (borrow == null) {
            return res.status(404).json({ message: 'Không tìm thấy bản ghi mượn sách' });
        }

        await borrow.remove();
        res.json({ message: 'Đã xóa bản ghi mượn sách' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};