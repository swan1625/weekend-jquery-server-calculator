const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
problemArr = [];


app.get ('/mathProblems', function(req, res) { 
    console.log('in /mathProbs GET');
    res.send(problemArr);
 
  });
  
app.post('/mathProblems', function(req, res) {
    console.log('in /mathProbs GET', req.body);
    problemArr.push( req.body );
    res.sendStatus(200);
  })


// --------------------------------------------

app.listen(port, function() {
    console.log('listening on port', port);
});