const Sach = require('../models/SACH');

// Lấy danh sách tất cả sách
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Sach.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm sách mới
exports.createBook = async (req, res) => {
    const book = new Sach({
        maSach: req.body.maSach,
        tenSach: req.body.tenSach,
        donGia: req.body.donGia,
        soQuyen: req.body.soQuyen,
        namXuatBan: req.body.namXuatBan,
        maNXB: req.body.maNXB,
        tacGia: req.body.tacGia
    });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Lấy thông tin sách theo ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Sach.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Không tìm thấy sách' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Cập nhật thông tin sách
exports.updateBook = async (req, res) => {
    try {
        const book = await Sach.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Không tìm thấy sách' });
        }

        if (req.body.tenSach != null) {
            book.tenSach = req.body.tenSach;
        }
        if (req.body.donGia != null) {
            book.donGia = req.body.donGia;
        }
        if (req.body.soQuyen != null) {
            book.soQuyen = req.body.soQuyen;
        }
        if (req.body.namXuatBan != null) {
            book.namXuatBan = req.body.namXuatBan;
        }
        if (req.body.maNXB != null) {
            book.maNXB = req.body.maNXB;
        }
        if (req.body.tacGia != null) {
            book.tacGia = req.body.tacGia;
        }

        const updatedBook = await book.save();
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xóa sách
exports.deleteBook = async (req, res) => {
    try {
        const book = await Sach.findById(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Không tìm thấy sách' });
        }

        await book.remove();
        res.json({ message: 'Đã xóa sách' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};