const DocGia = require('../models/DocGia');

// Lấy danh sách tất cả độc giả
exports.getAllUsers = async (req, res) => {
    try {
        const users = await DocGia.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm độc giả mới
exports.createUser = async (req, res) => {
    const user = new DocGia({
        maDocGia: req.body.maDocGia,
        hoLot: req.body.hoLot,
        ten: req.body.ten,
        ngaySinh: req.body.ngaySinh,
        phai: req.body.phai,
        diaChi: req.body.diaChi,
        dienThoai: req.body.dienThoai
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Lấy thông tin độc giả theo ID
exports.getUserById = async (req, res) => {
    try {
        const user = await DocGia.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Không tìm thấy độc giả' });
        }
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Cập nhật thông tin độc giả
exports.updateUser = async (req, res) => {
    try {
        const user = await DocGia.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Không tìm thấy độc giả' });
        }

        if (req.body.hoLot != null) {
            user.hoLot = req.body.hoLot;
        }
        if (req.body.ten != null) {
            user.ten = req.body.ten;
        }
        if (req.body.ngaySinh != null) {
            user.ngaySinh = req.body.ngaySinh;
        }
        if (req.body.phai != null) {
            user.phai = req.body.phai;
        }
        if (req.body.diaChi != null) {
            user.diaChi = req.body.diaChi;
        }
        if (req.body.dienThoai != null) {
            user.dienThoai = req.body.dienThoai;
        }

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xóa độc giả
exports.deleteUser = async (req, res) => {
    try {
        const user = await DocGia.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'Không tìm thấy độc giả' });
        }

        await user.remove();
        res.json({ message: 'Đã xóa độc giả' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};