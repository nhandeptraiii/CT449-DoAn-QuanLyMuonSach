const express = require('express');
const router = express.Router();
const nhaXuatBanController = require('../controllers/nhaXuatBanController');

// Lấy danh sách tất cả nhà xuất bản
router.get('/', nhaXuatBanController.getAllPublishers);

// Thêm nhà xuất bản mới
router.post('/', nhaXuatBanController.createPublisher);

// Lấy thông tin nhà xuất bản theo ID
router.get('/:id', nhaXuatBanController.getPublisherById);

// Cập nhật thông tin nhà xuất bản
router.put('/:id', nhaXuatBanController.updatePublisher);

// Xóa nhà xuất bản
router.delete('/:id', nhaXuatBanController.deletePublisher);

module.exports = router;