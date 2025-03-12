const NhanVien = require('../models/NhanVien');

// Lấy danh sách tất cả nhân viên
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await NhanVien.find();
        res.json(employees);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm nhân viên mới
exports.createEmployee = async (req, res) => {
    const employee = new NhanVien({
        MSNV: req.body.MSNV,
        hoTenNV: req.body.hoTenNV,
        password: req.body.password,
        chucVu: req.body.chucVu,
        diaChi: req.body.diaChi,
        soDienThoai: req.body.soDienThoai
    });

    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Lấy thông tin nhân viên theo ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await NhanVien.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
        }
        res.json(employee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Cập nhật thông tin nhân viên
exports.updateEmployee = async (req, res) => {
    try {
        const employee = await NhanVien.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
        }

        if (req.body.hoTenNV != null) {
            employee.hoTenNV = req.body.hoTenNV;
        }
        if (req.body.password != null) {
            employee.password = req.body.password;
        }
        if (req.body.chucVu != null) {
            employee.chucVu = req.body.chucVu;
        }
        if (req.body.diaChi != null) {
            employee.diaChi = req.body.diaChi;
        }
        if (req.body.soDienThoai != null) {
            employee.soDienThoai = req.body.soDienThoai;
        }

        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xóa nhân viên
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await NhanVien.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhân viên' });
        }

        await employee.remove();
        res.json({ message: 'Đã xóa nhân viên' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};