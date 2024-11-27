const express = require("express");
const data = require("./data"); 
const app = express();
const port = 5000;

app.use(express.json());

app.get('/getorder', (req, res) => {
    res.json(data);
});

app.post('/postorder', (req, res) => {
    const { orderId, customerName, date, total, status } = req.body;

    const newOrder = {
        orderId,
        customerName,
        date,
        total,
        status
    };

    data.push(newOrder);
    res.status(200).json(newOrder);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
