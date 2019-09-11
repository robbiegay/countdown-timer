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

    // let countYr = 

    yrOutput.innerHTML = `${yr}`;
    mthOutput.innerHTML = `${mth + 1}`; // Added 1 to make it a 1-12 range
    dyOutput.innerHTML = `${dy}`;
    hrOutput.innerHTML = `${hr}`;
    minOutput.innerHTML = `${min}`;
    secOutput.innerHTML = `${sec}`;
}

// Gets the inputted time








setInterval(currentTime, 250); // Checks the time remaining every 250ms


// need to do add event listener 'change'