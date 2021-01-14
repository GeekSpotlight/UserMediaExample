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


// To serve index.html and script.js as static files.
app.get('/', express.static(path.join(__dirname, '/public')));
app.use("/js", express.static(path.join(__dirname, '/public/js')));


// app.listen(httpPort, () => {
//   console.log(`Express HTTP Server running on port ${httpPort}`);
// });

httpServer.listen(httpPort, () => {
    console.log(`HTTP Server running on port ${httpPort}`);
});

httpsServer.listen(httpsPort, () => {
    console.log(`HTTPS Server running on port ${httpsPort}`);
});