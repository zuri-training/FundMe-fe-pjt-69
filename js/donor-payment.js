function showDiv() {
  document.getElementById('payment').style.display = "block";
  document.getElementById('continue').style.display = "none";
}

var value_1 = document.getElementById('value-1');
var value_2 = document.getElementById('value-2');
var value_3 = document.getElementById('value-3');
var value_4 = document.getElementById('value-4');

var amount_input = document.getElementById('amount');

var percent_2 = document.getElementById('percent-2');
var percent_5 = document.getElementById('percent-5');
var percent_8 = document.getElementById('percent-8');
var percent_10 = document.getElementById('percent-10');

value_2.innerHTML = 2000;
value_1.innerHTML = 1000;
value_3.innerHTML = 10000;
value_4.innerHTML = 50000;


var amount_donated = document.getElementById('amount-donated');


function amount(value_1) {
  amount_input.value = value_1.innerHTML;

}
function amount(value_2) {
  amount_input.value = value_2.innerHTML;

}
function amount(value_3) {
  amount_input.value = value_3.innerHTML;

}
function amount(value_4) {
  amount_input.value = value_4.innerHTML;
}


