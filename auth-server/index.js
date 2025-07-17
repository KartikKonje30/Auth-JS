const express = require('express');
const app = express();

const PORT = 5500;

app.get('/', (req, res) => {
    res.send('Hello from Kartik!');
});

app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
});
