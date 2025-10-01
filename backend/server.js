require('dotenv').config();
const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

// Route
app.use('/api/requirements', require('./routes/requirements'));

const PORT = 5050;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));