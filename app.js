const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Jenkins CI/CD Demo</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 100px;
                    }
                    h1 {
                        color: #d24939;
                    }
                </style>
            </head>
            <body>
                <h1>Jenkins CI/CD Pipeline</h1>
                <h2>Deployment Successful 🚀</h2>
                <p>Application deployed using Jenkins and Docker.</p>
            </body>
        </html>
    `);
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        message: "Application is healthy"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});