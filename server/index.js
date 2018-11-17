const express = require('express')
var cors = require('cors')
const app = express()
const path = require('path');

app.use(cors())

app.get('/auth', (req, res) => {
    console.log('/auth');
    res.header('Content-Type', 'text/html');
    res.sendFile(path.join(__dirname + '/index.html'));
    // res.send('/auth');
})
app.get('/blat/auth', (req, res) => {
    console.log('/blat/auth');
    res.redirect('https://www.google.com');
});
app.get('/', (req, res) => {
    console.log('/');
    res.send('/');
});

app.listen(80, () => console.log('Example app listening on port 80!'))
