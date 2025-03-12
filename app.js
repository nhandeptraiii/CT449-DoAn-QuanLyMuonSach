const express = require('express');
const cors = require('cors');

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World!',
    });
});

module.exports = app;

