const express = require('express');
const router = express.Router();
const sachController = require('../controllers/sachController');

// Lấy danh sách tất cả sách
router.get('/', sachController.getAllBooks);

// Thêm sách mới
router.post('/', sachController.createBook);

// Lấy thông tin sách theo ID
router.get('/:id', sachController.getBookById);

// Cập nhật thông tin sách
router.put('/:id', sachController.updateBook);

// Xóa sách
router.delete('/:id', sachController.deleteBook);

module.exports = router;