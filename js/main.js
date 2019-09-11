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

let instr = document.querySelector('.instructions');


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
    yrOutput.innerHTML = `${countYr - yr}y:`;
    
    /*
    if (Math.sign(countMth - (mth + 1)) === -1) { // checks for a negative number
        mthOutput.innerHTML = `${(mth + 1) - countMth}m:`; // current month - month to go to
        yrOutput.innerHTML = `${(countYr - yr) - 1}y:`;
    } else {
        mthOutput.innerHTML = `${countMth - (mth + 1)}m:`; // Added 1 to make it a 1-12 range
    }*/
    mthOutput.innerHTML = `${countMth - (mth + 1)}m:`; // Added 1 to make it a 1-12 range
    dyOutput.innerHTML = `${countDy - dy}d:`;

    let countHr = setCountTime().slice(0, 2);
    let countMin = setCountTime().slice(3, 5);
    hrOutput.innerHTML = `${countHr - hr}:`;
    minOutput.innerHTML = `${countMin - min}:`;
    secOutput.innerHTML = `${59 - sec}`; // This might cause it to be off by 1 second
    
    // Sets the initial visibility of timer to hiddem
    if (setCountDate() === "") {
        yrOutput.setAttribute('style', 'visibility: hidden;');
        mthOutput.setAttribute('style', 'visibility: hidden;');
        dyOutput.setAttribute('style', 'visibility: hidden;');
    } else {
        yrOutput.setAttribute('style', 'visibility: visible;');
        mthOutput.setAttribute('style', 'visibility: visible;');
        dyOutput.setAttribute('style', 'visibility: visible;');
    }

    if (setCountTime() === "") {
        hrOutput.setAttribute('style', 'visibility: hidden;');
        minOutput.setAttribute('style', 'visibility: hidden;');
        secOutput.setAttribute('style', 'visibility: hidden;');
    } else {
        hrOutput.setAttribute('style', 'visibility: visible;');
        minOutput.setAttribute('style', 'visibility: visible;');
        secOutput.setAttribute('style', 'visibility: visible;');
    }

    if (setCountDate() === "" && setCountTime() === "") {
        instr.setAttribute('style', 'visibility: visible;');
        instr.innerHTML = 'Select a time to count down to';
    } else {
        instr.setAttribute('style', 'visibility: hidden;');
    }

    // Sets the minimum of the fields to the current time
    dateSelection.setAttribute('min', (yr + "-0" + (mth + 1) + "-" + dy)); //need to run the addZero function
    // timeSelection.setAttribute('min', (hr + ":" + min)); // this might require a different solution
    /*
    function addZero(timeUnit, timePlace) {
        if (timeUnit < 10) {
            timeUnit = `0${timeUnit}`;
            timePlace.innerHTML = timeUnit;
        } else {
            timePlace.innerHTML = timeUnit;
        }
    }
    */

}

setInterval(countdown, 250); // Checks the time remaining every 250ms



/*
Todo:
---make it so you can only select times in the future --> done for date
---put addZero function

---need to make it stop at zero


later:
---make the box resive if hidden
---create functions where you can; clean up code
---adject styling





*/