const express = require('express');
const router = express.Router();
const theoDoiMuonSachController = require('../controllers/theoDoiMuonSachController');

// Lấy danh sách tất cả các bản ghi mượn sách
router.get('/', theoDoiMuonSachController.getAllBorrows);

// Thêm bản ghi mượn sách mới
router.post('/', theoDoiMuonSachController.createBorrow);

// Lấy thông tin bản ghi mượn sách theo ID
router.get('/:id', theoDoiMuonSachController.getBorrowById);

// Cập nhật thông tin bản ghi mượn sách
router.put('/:id', theoDoiMuonSachController.updateBorrow);

// Xóa bản ghi mượn sách
router.delete('/:id', theoDoiMuonSachController.deleteBorrow);

module.exports = router;