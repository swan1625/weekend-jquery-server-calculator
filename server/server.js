const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// --------------------------------------------------------------------- 

problemArr = [];       // empty array for incoming problem pieces
ansHistArr = [];       // empty array for history  


// --------------------------------------------------------------------- 

app.get ('/mathProblems', function(req, res) { 
    console.log('in /mathProbs GET');
    res.send(problemArr);
  });
  
app.post('/mathProblems', function(req, res) {
    console.log('in /mathProbs GET', req.body);
    let a = req.body.numOne;
    let b = req.body.numTwo;
    let sign = req.body.sign;
    let answer = 0;

    if (sign == 'add'){
        answer = (a + b);
    } else if (sign == 'sub' ){
        answer = (a - b);
    } else if (sign == 'mul' ){
        answer = (a * b);
    } else if (sign == 'div' ){
        answer = (a / b);
        return; 
    }
console.log(answer);


let answerObj = {
    first: a,
    second: b,
    sign: sign,
    answer: answer
}
    ansHistArr.push( answerObj );
    res.send(answerObj);
})


  


// --------------------------------------------------------------------- 

app.listen(port, function() {
    console.log('listening on port', port);
});