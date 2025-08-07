const express = require('express');
const { authRoutes } = require('./routes');
const app = express();
const PORT = 5500;

// Parsing in JSON 
app.use(express.json());

app.use('/api/auth/', authRoutes);

app.get('/', (req, res) => {
    res.send('Hello from Kartik!');
});

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
});
