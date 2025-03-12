const NhaXuatBan = require('../models/NhaXuatBan');

// Lấy danh sách tất cả nhà xuất bản
exports.getAllPublishers = async (req, res) => {
    try {
        const publishers = await NhaXuatBan.find();
        res.json(publishers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Thêm nhà xuất bản mới
exports.createPublisher = async (req, res) => {
    const publisher = new NhaXuatBan({
        maNXB: req.body.maNXB,
        tenNXB: req.body.tenNXB,
        diaChi: req.body.diaChi
    });

    try {
        const newPublisher = await publisher.save();
        res.status(201).json(newPublisher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Lấy thông tin nhà xuất bản theo ID
exports.getPublisherById = async (req, res) => {
    try {
        const publisher = await NhaXuatBan.findById(req.params.id);
        if (publisher == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhà xuất bản' });
        }
        res.json(publisher);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Cập nhật thông tin nhà xuất bản
exports.updatePublisher = async (req, res) => {
    try {
        const publisher = await NhaXuatBan.findById(req.params.id);
        if (publisher == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhà xuất bản' });
        }

        if (req.body.tenNXB != null) {
            publisher.tenNXB = req.body.tenNXB;
        }
        if (req.body.diaChi != null) {
            publisher.diaChi = req.body.diaChi;
        }

        const updatedPublisher = await publisher.save();
        res.json(updatedPublisher);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Xóa nhà xuất bản
exports.deletePublisher = async (req, res) => {
    try {
        const publisher = await NhaXuatBan.findById(req.params.id);
        if (publisher == null) {
            return res.status(404).json({ message: 'Không tìm thấy nhà xuất bản' });
        }

        await publisher.remove();
        res.json({ message: 'Đã xóa nhà xuất bản' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};