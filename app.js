const express = require('express');
const cors = require('cors');


const sachRoutes = require('./routes/sachRoutes');
const theoDoiMuonSachRoutes = require('./routes/theoDoiMuonSachRoutes');
const nhaXuatBanRoutes = require('./routes/nhaXuatBanRoutes');
const docGiaRoutes = require('./routes/docGiaRoutes');
const nhanVienRoutes = require('./routes/nhanVienRoutes');

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


module.exports = app;

