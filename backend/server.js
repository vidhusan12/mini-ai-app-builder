const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Placeholder route
app.get('/', (req, res) => {
  res.send('Mini AI App Builder Backend is running!');
});

// TODO: Add routes for AI extraction and MongoDB connection

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});