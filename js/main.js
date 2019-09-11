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


function countdown() { // Gets the current time
    let date = new Date();
    let yr = date.getFullYear(); // Returns 4-digit year
    let mth = date.getMonth(); // Returns month, 0-11
    let dy = date.getDate(); // Returns day of the month 1-31
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    dateSelection.oninput = setCountDate; // Runs the setCountDate on input of form
    timeSelection.oninput = setCountTime;

    function setCountDate() {
        return dateSelection.value;
    }
    function setCountTime() {
        return timeSelection.value;
    }

    let countYr = setCountDate().slice(0, 4);
    let countMth = setCountDate().slice(5, 7);
    let countDy = setCountDate().slice(8, 10);
    yrOutput.innerHTML = `${countYr - yr}`;
    mthOutput.innerHTML = `${countMth - (mth + 1)}`; // Added 1 to make it a 1-12 range
    dyOutput.innerHTML = `${countDy - dy} days`;

    let countHr = setCountTime().slice(0, 2);
    let countMin = setCountTime().slice(3, 5);
    // let countSec = setCountTime().slice(8, 10);
    hrOutput.innerHTML = `${countHr - hr}`;
    minOutput.innerHTML = `${countMin - min}`;
    // secOutput.innerHTML = `${sec}`;
}


setInterval(countdown, 250); // Checks the time remaining every 250ms
// A function to: add zero; to make year, month, day invisible if === 0, remove s from day(s)



/*
Todo:
---make the default 0 when no input yet
---make it so you can only select times in the future
---add seconds functionality


*/