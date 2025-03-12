const express = require('express');
const router = express.Router();
const nhanVienController = require('../controllers/nhanVienController');

// Lấy danh sách tất cả nhân viên
router.get('/', nhanVienController.getAllEmployees);

// Thêm nhân viên mới
router.post('/', nhanVienController.createEmployee);

// Lấy thông tin nhân viên theo ID
router.get('/:id', nhanVienController.getEmployeeById);

// Cập nhật thông tin nhân viên
router.put('/:id', nhanVienController.updateEmployee);

// Xóa nhân viên
router.delete('/:id', nhanVienController.deleteEmployee);

module.exports = router;