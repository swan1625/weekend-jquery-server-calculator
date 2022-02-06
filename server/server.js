const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

// --------------------------------------------------------------------- 

problemArr = [];       // empty array for incoming problem pieces     

// --------------------------------------------------------------------- 

app.get ('/mathProblems', function(req, res) { 
    console.log('in /mathProbs GET');
    res.send(problemArr);                       //sending array back to client
  });
  
app.post('/mathProblems', function(req, res) {
    console.log('in /mathProbs GET', req.body);
    let a = Number(req.body.a);                     //declaring variable to make loop less jumbled
    let sign = req.body.signs;
    let b = Number(req.body.b);
    let answer = 0;  
    if (sign === '+'){                             /// running calculations      
        answer = (a + b);
    } else if (sign === '-' ){
        answer = (a - b);
    } else if (sign === '*' ){
        answer = (a * b);
    } else if (sign === '÷' ){
        answer = (a / b);
    }
    
    console.log(answer);

    let answerObj = {                    // declaring new object to include answer
        first: a,
        sign: sign,
        second: b,
        answer: answer
    }

    problemArr.push( answerObj );      //pushing new object to array in server
    res.sendStatus(201);

})

// --------------------------------------------------------------------- 

app.listen(port, function() {
    console.log('listening on port', port);
});