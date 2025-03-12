const express = require('express');
const cors = require('cors');


const sachRoutes = require('./routes/sachRoutes');
const theoDoiMuonSachRoutes = require('./routes/theoDoiMuonSachRoutes');
const nhaXuatBanRoutes = require('./routes/nhaXuatBanRoutes');
const docGiaRoutes = require('./routes/docGiaRoutes');
const nhanVienRoutes = require('./routes/nhanVienRoutes');
const ApiError = require('./api-error');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});

// Routes
app.use('/api/sach', sachRoutes);
app.use('/api/muon-sach', theoDoiMuonSachRoutes);
app.use('/api/nha-xuat-ban', nhaXuatBanRoutes);
app.use('/api/doc-gia', docGiaRoutes);
app.use('/api/nhan-vien', nhanVienRoutes);

//handle 404 reponse
app.use((req, res, next) => {
    //Code ở đây sẽ chạy khi không có route được định nghĩa 
    //khớp với yêu cầu. Gọi next() để chuyển sang middleware xử lý lỗi 
    return next(new ApiError(404, "Resource not found"));
});

app.use((err, req, res, next) => {
    //Middleware xử lý lỗi tập trung 
    //Trong các đoạn xử lý code ở route, gọi next(error) sẽ chuyển về middleware xử lý lỗi này
    return res.status(error.statusCode || 500).json({
        message : error.message || "Internal Server Error",
    });
});


module.exports = app;

