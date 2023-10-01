function calculate(val) {
    var v = document.getElementById('result');
    v.value += val;
 }
 function display() {
    var currVal = document.getElementById('result').value;
    var newVal  = eval(currVal);
    document.getElementById('result').value = newVal;
 }
 function allClear() {
    var input = document.getElementById('result');
    input.value = '';
 }
 function backspace() {
    var eraseVal = document.getElementById('result');
    eraseVal.value = eraseVal.value.slice(0,-1);
 }