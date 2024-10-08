//  Create a middleware that logs all incoming requests to the console.

const express = require('express');
const app = express();

function logRequests(req, res, next) {
    // write the logic for request log here
    const method = req.method;
    const url = req.originalUrl;
    const timeStamp = new Date().toISOString(); 
    if(method === 'GET' || method === 'POST') {
        console.log(`${method} ${url} - ${timeStamp}`);
    }
    next();

}

app.use(logRequests);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

app.post('/', (req, res) => {
    res.status(404).send('not found ')
})
app.listen(3000)

module.exports = app;
