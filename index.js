const express = require('express');
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const app = express();

const httpPort = 8080;
const httpsPort = 1443;

const httpServer = http.createServer(app);
const httpsServer = https.createServer({
  key: fs.readFileSync('ssl_cert/cert.key'),
  cert: fs.readFileSync('ssl_cert/cert.crt'),
}, app);


app.get('/', express.static(path.join(__dirname, '/public')));
app.use("/js", express.static(path.join(__dirname, '/public/js')));

httpServer.listen(httpPort, () => {
    console.log(`HTTP Server running on port ${httpPort}`);
});

httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS Server running on port ${httpsPort}`);
});