// Validate input and calculate tip

function calcTip() {

    var billAmt = document.getElementById('billAmt').value;
    var serviceQual = document.getElementById('serviceQual').value;
    var numOfPeople = document.getElementById('people').value;

    // Validate input
    if (billAmt === "" || billAmt === '0') {
        alert('Please enter correct values!')
        return;                                   // return to initial state, break function execution, otherwise error.

    } else if (serviceQual === '0') {                // Or serviceQual == 1 ,  == does typecoercion
        alert('Please enter correct value at service!')
        return

    } else if (numOfPeople === "") {
        alert('Please enter correct value at Number of People!')
        return;

    } else if (numOfPeople === '1') {
        document.getElementById('each').style.display = "none";

    } else if (numOfPeople > '1') {
        document.getElementById('each').style.display = "inline";
    }

    //Rotates dollar sign
    rotateDollar()

    //Shows pop up with message when tip is 20% or more
    let timer = setTimeout(() => {

        youAreSoGenerous(serviceQual)

        setTimeout(() => {
            document.querySelector('.generous').style.visibility = 'hidden';
            return () => {
                clearTimeout(timer);
            }
        }, 4000);
    }, 3000);

    //Calculate tip
    var totalTip = (billAmt * serviceQual) / numOfPeople;
    totalTip = totalTip.toFixed(2);

    // Display tip
    if (isNaN(totalTip)) {
        document.getElementById('totalTip').innerHTML = '<sup>$</sup>' + '0,00';
    }
    document.getElementById('totalTip').style.display = 'block';
    document.getElementById('tip').innerHTML = totalTip;
};


// If tip is higher than 15% show popup message
function youAreSoGenerous(serviceQual) {
    if (serviceQual >= '0.2') {
        document.querySelector('.generous').style.visibility = 'visible'
    }
    return
};


//Rotate dollar sign on click
function rotateDollar() {
    document.querySelector('.topIcon').classList.toggle('topIconRotate');
    document.querySelector('.bottomIcon').classList.toggle('topIconRotate');
    document.querySelector('.bottomIcon2').classList.toggle('topIconRotate2');

    pushButton.disabled = true
};


// Hide each on page load and after clear input
document.getElementById('each').style.display = 'none';


// Activate button
var pushButton = document.getElementById('myButton');
pushButton.addEventListener('click', calcTip);


// Clear input
var clearBtn = document.getElementById('clearInput');
clearBtn.addEventListener('click', deleteInput);


function deleteInput() {
    document.getElementById('billAmt').value = "";
    document.getElementById('serviceQual').value = "0";
    document.getElementById('people').value = "";
    document.getElementById('tip').innerHTML = "0,00";
    document.getElementById('each').style.display = 'none';
    pushButton.disabled = false
}

deleteInput();




