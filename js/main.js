let dateInput = document.querySelector('dateInput');
let timeInput = document.querySelector('timeInput');

let yrOutput = document.querySelector('.yr');
let mthOutput = document.querySelector('.mth');
let dyOutput = document.querySelector('.dy');
let hrOutput = document.querySelector('.hr');
let minOutput = document.querySelector('.min');
let secOutput = document.querySelector('.sec');

let dateSelection = document.querySelector('.dateSelection');
let timeSelection = document.querySelector('.timeSelection');


function currentTime() { // Gets the current time
    let date = new Date();
    let yr = date.getFullYear(); // Returns 4-digit year
    let mth = date.getMonth(); // Returns month, 0-11
    let dy = date.getDate(); // Returns day of the month 1-31
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    dateSelection.oninput = setCountDate; // Runs the setCountDate on input of form

    function setCountDate() {
        let countYr = dateSelection.value.slice(0, 4);
        let countMth = dateSelection.value.slice(5, 7);
        let countDy = dateSelection.value.slice(8, 10);
        // alert(countDy); Used alert to test if the values were returning properly
        yrOutput.innerHTML = `${countYr - yr}`; // If statument that removes the s if === to 1
        mthOutput.innerHTML = `${countMth - (mth + 1)}`; // Added 1 to make it a 1-12 range
        dyOutput.innerHTML = `${countDy - dy} days`;
    }

    // when a cange happens in the form, set the values to subtract

    

    /*
    yrOutput.innerHTML = `${countYr - yr}`; // If statument that removes the s if === to 1
    mthOutput.innerHTML = `${mth + 1}`; // Added 1 to make it a 1-12 range
    dyOutput.innerHTML = `${dy} days`;
    */
    hrOutput.innerHTML = `${hr}`;
    minOutput.innerHTML = `${min}`;
    secOutput.innerHTML = `${sec}`;
}


setInterval(currentTime, 250); // Checks the time remaining every 250ms
// A function to: add zero; to make year, month, day invisible if === 0