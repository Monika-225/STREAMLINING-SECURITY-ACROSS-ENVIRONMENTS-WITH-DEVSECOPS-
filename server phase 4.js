const express = require('express');
const app = express();

app.get('/status', (req, res) => {
    res.json({ status: "Running Securely" });
});

app.listen(3000, () => console.log("Monitoring API running on port 3000"));
