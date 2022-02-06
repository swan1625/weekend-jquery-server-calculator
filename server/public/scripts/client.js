$(document).ready(onReady);

function onReady() {
    // getMath();
    $( '#equal-button' ).on( 'click',  runMath);    // equal button click listener
    $( '#clear-button' ).on( 'click', clearInputs );   //clear button click listener 
} //end onReady

function runMath(){           // function takes in values, puts into an object, and sends to server
                        
    console.log('working');
    let numOne = $('#valueOne').val();            
    let numTwo = $('#valueTwo').val();
    let sign = $('#signs').val();
    let mathObj = {                       
    a: numOne,
    signs: sign,
    b: numTwo
}

console.log(mathObj);
if(numOne === '' || numTwo === '') {                                              //alert if one or both input values are empty
    alert('Please fill out both numbers! / ¡por favor llene ambos números!');  
}
    $.ajax({
        method: 'POST',
        url: '/mathProblems',
        data : mathObj
    }).then( function(response){
        console.log('back from post with', response);
        getMath();
        $('#valueOne').val('');
        $('#valueTwo').val('');   
    }).catch ( function( err ){
        alert ('error occured, see console for detail');
        console.log(err);
    })
}   //end runMath

function getMath() {
    $.ajax({
        method: 'GET',
        url: '/mathProblems',
    }).then( function (response ){
        console.log('back from get with', response);
        renderToDom(response);
        renderToDomResult(response);
    }).catch ( function( err ){
        alert ('error occured, see console for detail');
        console.log(err);
    })
}  //end getMath

function renderToDomResult(arr) {
    for(let ans of arr){
        let a = (`${ans.answer}`);
        $('#result-display').empty();
        $('#result-display').append(a);
    }
} //end renderToDomResult

 function renderToDom(arr){                //function that puts our equations on the dom 
    $('#answer-display').empty();
    for(let ans of arr){
        $('#answer-display').append(`<li>${ans.first} ${ans.sign} ${ans.second} = ${ans.answer}</li>`) 
    }
    
} //end renderToDom

function clearInputs() {       // function clears input fields upon button click
    $('#valueOne').val('');
    $('#valueTwo').val('');
} //end clearInputs