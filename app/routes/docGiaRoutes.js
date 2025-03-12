const express = require('express');
const router = express.Router();
const docGiaController = require('../controllers/docGiaController');

// Lấy danh sách tất cả độc giả
router.get('/', docGiaController.getAllUsers);

// Thêm độc giả mới
router.post('/', docGiaController.createUser);

// Lấy thông tin độc giả theo ID
router.get('/:id', docGiaController.getUserById);

// Cập nhật thông tin độc giả
router.put('/:id', docGiaController.updateUser);

// Xóa độc giả
router.delete('/:id', docGiaController.deleteUser);

module.exports = router;