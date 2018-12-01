const express = require('express')
var cors = require('cors')
const app = express()
const path = require('path');

app.use(cors())

app.get('/', (req, res) => {
    console.log('/');
    res.send('/');
});

app.listen(80, () => console.log('Example app listening on port 80!'))
