const http = require('node:http');
const NodeWebcam = require('node-webcam');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Create an instance of the webcam
const Webcam = NodeWebcam.create();

// Create a folder to store the pictures
const picturesFolder = './pictures';
if (!fs.existsSync(picturesFolder)) {
    fs.mkdirSync(picturesFolder);
}

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    // Function to capture picture using the webcam
    const capturePicture = () => {
        const timestamp = new Date().getTime();
        const picturePath = `${picturesFolder}/picture_${timestamp}.jpg`;

        Webcam.capture(picturePath, (err, data) => {
            if (err) {
                console.error('Failed to capture picture:', err);
                res.end('Failed to capture picture');
            } else {
                console.log('Picture captured:', data);
                res.end(`Don't disturb, I am worrking!`);
            }
        });
    };

    // Take a picture immediately
    capturePicture();

    // Take a picture every 5 seconds
    setInterval(capturePicture, 5000);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
