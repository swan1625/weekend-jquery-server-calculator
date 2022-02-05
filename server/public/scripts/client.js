$(document).ready(onReady);

function onReady() {
  
    // getMath();
    $( '#equal-button' ).on( 'click',  runMath);    // equal button click listener
    // $( '#clear-button' ).on( 'click', clearInputs );   //clear button click listener 
}

function runMath(){                             // function that 
    console.log('working');
    let numOne = $('#valueOne').val();
    let numTwo = $('#valueTwo').val();
    let sign = $('#signs').val();
    let mathObj = {                       
    a: numOne,
    b: numTwo,
    signs: sign
}
console.log(mathObj);
if(numOne === '' || numTwo === '') {                                              //alert if input values arent defined
    alert('Please fill out both numbers! / ¡por favor llene ambos números!');
    // return;
}
    $.ajax({
        method: 'POST',
        url: '/mathProblems',
        data : mathObj
    }).then( function(response){
        console.log('back from post with', response);
        getMath();
    }).catch ( function( err ){
        alert ('error occured, see console for detail');
        console.log(err);
    })
 }    


function getMath() {
    $.ajax({
        method: 'GET',
        url: '/mathProblems',
    }).then( function (response ){
        console.log('back from get with', response);
    }).catch ( function( err ){
        alert ('error occured, see console for detail');
        console.log(err);
    })
 }  //end getMath

//     $.ajax({
//         method: 'POST',
//         url: '/guesses',
//         data: {
// }
// if (sign == 'add'){
//     answer = (a + b);
// } else if (sign == 'sub' ){
//     answer = (a - b);
// } else if (sign == 'mul' ){
//     answer = (a * b);
// }else if (sign == 'div' ){
//     answer = (a / b);
// }


//    if (signs == 'add'){
//      signs = '+';
// } else if (signs == 'sub' ){
//     signs = '-';
// } else if (signs == 'mul' ){
//     signs = '*';
// }else if (signs == 'div' ){
//     signs = '*';