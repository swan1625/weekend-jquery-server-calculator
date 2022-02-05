$(document).ready(onReady);

function onReady() {
    console.log('JQ');

    $( '#equal-button' ).on( 'click', runMath );    
    // $( '#clear-button' ).on( 'click', clearInputs );
}

function runMath(){
console.log('working');

const InputInformation = {                       
    a: Number($('#valueOne').val()),
    b: Number($('#valueTwo').val()),
    sign: $('#signs').val()
      }
let answer;

if (sign == 'add'){
    answer = (a + b);
} else if (sign == 'sub' ){
    answer = (a - b);
} else if (sign == 'mul' ){
    answer = (a * b);
}else if (sign == 'div' ){
    answer = (a / b);
}

document.querySelector("#result").value = answer;

}