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
    showMessage(serviceQual)

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


// If tip is 20%or more show popup message
function youAreSoGenerous(serviceQual) {
    if (serviceQual >= '0.2') {
        document.querySelector('.generous').style.visibility = 'visible'
        document.querySelector('.wow').style.visibility = 'visible'
    }
};


function showMessage(serviceQual) {
    let timer = setTimeout(() => {
        youAreSoGenerous(serviceQual)
        document.querySelector('.wow').classList.toggle('wowRotate');

        setTimeout(() => {
            document.querySelector('.generous').style.visibility = 'hidden';
        }, 6000);

        setTimeout(() => {
            document.querySelector('.wow').style.visibility = 'hidden'
        }, 3000)
        return ()=> {
            clearTimeout(timer)
        }

    }, 4000);
}


//Rotate dollar sign on click
function rotateDollar() {
    document.querySelector('.topIcon').classList.toggle('topIconRotate');
    document.querySelector('.bottomIcon').classList.toggle('topIconRotate');
    document.querySelector('.bottomIcon2').classList.toggle('topIconRotate2');
    pushButton.disabled = true
};


// Hide p.p. on page load and after clear input
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





