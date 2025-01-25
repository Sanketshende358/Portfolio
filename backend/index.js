// server.js
const express = require('express');
const mongoose = require('mongoose');
const projectRoutes = require('./routes/projectRoutes');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(cors());
app.use(express.json());

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
mongoose.connect('mongodb+srv://sanketshende358:Portfolio@cluster0.wjq2s.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Use project routes
app.use('/api', projectRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});