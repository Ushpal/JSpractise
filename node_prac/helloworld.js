const http = require('node:http');
const https = require('https');

// const http= require('node:http');
// const http = require('http'); // Import the http module

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html'); // Change the Content-Type to 'text/html'

    // Fetchs the Forbes website
    https.get('https://www.bbc.com/news', (response) => {
        let data = '';

        // Collects the response data
        response.on('data', (chunk) => {
            data += chunk;
        });

        // Process the collected data
        response.on('end', () => {
            // Extracts the news URLs from the data
            const newsUrls = extractNewsUrls(data);

            // Creates an HTML list of news URLs
            const newsList = `<ul>${newsUrls.map(url => `<li><a href="${url}">${url}</a></li>`).join('')}</ul>`;

            // Sends the news list as the response
            res.end(newsList);
        });
    }).on('error', (error) => {
        console.error(`Error fetching Forbes website: ${error}`);
        res.end('Error fetching Forbes website');
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function extractNewsUrls(data) {         // Use regular expressions or a HTML parsing library to extract the news URLs from the data
                                        // Here's an example using regular expressions:
    
    const regex = /<a href="(https?:\/\/[^"]+)"/g;
    const matches = data.matchAll(regex);
    const newsUrls = [];

    for (const match of matches) {
        newsUrls.push(match[1]);
    }

    return newsUrls;
}