

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

console.log(donation.innerHTML)
console.log(donation.value)


function amount(value_1) {
    console.log(value_1)
    // amount_input.value = value_1.innerHTML;
    // donation.value = value_1.innerHTML;
    // donation.value = value_1.value;
    // donation.innerHTML = value_1.value;
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



//////////////////

var two = document.getElementById('two');
var five = document.getElementById('five');
var eight = document.getElementById('eight');
var ten = document.getElementById('ten');



// handles fundmetip
two.value = 2 / 100
five.value = 5 / 100
eight.value = 8 / 100
ten.value = 10 / 100


function fundTip(id) {
    console.log(donation.innerHTML)

    if(donation_amount == 0){
        alert("Please select a donation amount")
    }

    switch (id) {
        case "two":
            console.log("Do 2 percent calucation")
            tip.innerHTML = donation.innerHTML * two.value;
            //   total.innerHTML = donation.innerHTML + (donation.innerHTML * two.value)
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * two.value)
            break;
        case "five":
            console.log("Do 5 percent caluclation")
            tip.innerHTML = donation.innerHTML * five.value;
            //   total.innerHTML = donation.innerHTML + (donation.innerHTML * five.value)
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * five.value)
            break;
        case "eight":
            console.log("Do 8 percent calc")
            tip.innerHTML = donation.innerHTML * eight.value;
            //    total.innerHTML = donation.innerHTML + (donation.innerHTML * eight.value)
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * eight.value)
            break;
        case "ten":
            console.log("Do 10 percent calc")
            tip.innerHTML = donation.innerHTML * ten.value;
            //    total.innerHTML = number(donation.innerHTML) + (donation.innerHTML * ten.value)
            calculateTotal(parseFloat(donation.innerHTML), donation.innerHTML * ten.value)
            break;

        default:
            console.log("Not found")
            break;
    }
    // tip.innerHTML = amount_input.value * two.value;
    //tip.innerHTML = donation.innerHTML * two.value;
    // total.innerHTML = donation.value + (donation.value * two.value)

}

function calculateTotal(donation, tip) {
    total.innerHTML = donation + tip
}

//   function fundTip(five) {
//     tip.innerHTML = amount_input.value * five.value;
//     // tip.innerHTML = donation.value * five.value;
//     // total.innerHTML = donation.value + (donation.value * five.value)

//   }

//   function fundTip(eight) {
//     tip.innerHTML = amount_input.value * eight.value;
//     // tip.innerHTML = donation.value * eight.value;
//     // total.innerHTML = donation.value + (donation.value * eight.value)


//   }

//   function fundTip(ten) {
//     tip.innerHTML = amount_input.value * ten.value;
//     // tip.innerHTML = donation.value * ten.value;
//     // total.innerHTML = donation.value + (donation.value * ten.value)
//   }




