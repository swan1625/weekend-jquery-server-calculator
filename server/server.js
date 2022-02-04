const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('server/public'));

console.log('server is working baby');










// --------------------------------------------

app.listen(port, function() {
    console.log('listening on port', port);
});