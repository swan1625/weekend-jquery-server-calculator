$(document).ready(onReady);

function onReady() {
    console.log('JQ');

    $( '#equal-button' ).on( 'click',  runMath);    // equal button click listener
    // $( '#clear-button' ).on( 'click', clearInputs );
}

function runMath(){                             // function that 
    console.log('working');
    let numOne = $('#valueOne').val();
    let numTwo = $('#valueTwo').val();
    let mathObj = {                       
    a: numOne,
    b: numTwo,
    signs: signs
      }

if(numOne === '' || numTwo === '') {                                              //alert if input values arent defined
    alert('Please fill out both numbers! / ¡por favor llene ambos números!');
    return;
}
// if (sign == 'add'){
//     answer = (a + b);
// } else if (sign == 'sub' ){
//     answer = (a - b);
// } else if (sign == 'mul' ){
//     answer = (a * b);
// }else if (sign == 'div' ){
//     answer = (a / b);
// }


}