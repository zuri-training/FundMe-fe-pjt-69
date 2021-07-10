

/////////////
function showDiv() {
    document.getElementById('payment').style.display = "block";
    document.getElementById('continue').style.display = "none";
}

// this part, sets the value of the form to the amount click on from the 4 availble buttons
var value_1 = document.getElementById('value-1');
var value_2 = document.getElementById('value-2');
var value_3 = document.getElementById('value-3');
var value_4 = document.getElementById('value-4');
var amount_input = document.getElementById('amount');

var donation = document.getElementById('donation');
var tip = document.getElementById('tip');
var total = document.getElementById('total');

var donation_amount = 0
// value_1.innerHTML = 1000;
// value_2.innerHTML = 2000;
// value_3.innerHTML = 10000;
// value_4.innerHTML = 50000;


function amount(value_1) {
    donation.innerHTML = value_1.innerHTML;
    donation_amount = parseFloat(value_1.innerHTML)
}

//   function amount(value_2) {
//     amount_input.value = value_2.innerHTML;
//     // donation.value = value_2.innerHTML;


//   }
//   function amount(value_3) {
//     amount_input.value = value_3.innerHTML;
//     // donation.value = value_3.innerHTML;


//   }
//   function amount(value_4) {
//     amount_input.value = value_4.innerHTML;
//     // donation.value = value_4.innerHTML;

//   }

//   function enter(amount_input) {
//       donation.innerHTML = amount_input.value
//     //   donation.value = amount_input.innerHTML;

//   }



// handles fundmetip
var two = document.getElementById('two');
var five = document.getElementById('five');
var eight = document.getElementById('eight');
var ten = document.getElementById('ten');



two.value = 2 / 100
five.value = 5 / 100
eight.value = 8 / 100
ten.value = 10 / 100


function fundTip(id) {

    if(donation_amount == 0){
        alert("Please select a donation amount or enter the amount you want")
    }

    switch (id) {
        case "two":
            tip.innerHTML = donation.innerHTML * two.value;
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * two.value)
            break;
        case "five":
            tip.innerHTML = donation.innerHTML * five.value;
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * five.value)
            break;
        case "eight":
            tip.innerHTML = donation.innerHTML * eight.value;
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * eight.value)
            break;
        case "ten":
            tip.innerHTML = donation.innerHTML * ten.value;
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * ten.value)
            break;

        default:
            console.log("Not found")
            break;
    }
    
}

function calculateTotal(donation, tip) {
    total.innerHTML = donation + tip
}



