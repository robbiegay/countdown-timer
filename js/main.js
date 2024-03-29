
let dateSelection = document.querySelector('.dateSelection');
let timeSelection = document.querySelector('.timeSelection');

let instr = document.querySelector('.instructions');

let inM = document.querySelector('.inM');
let outM = document.querySelector('.outM');

let countdownBox = document.querySelector('.countdown');

let btn = document.querySelector('.update');
let diff = document.querySelector('.diff');
let alert = document.querySelector('.alert');

let rst = document.querySelector('.reset');



function countdown() {
    // Gets the current time in miliseconds
    let date = new Date();
    let currentMili = date.getTime();
    inM.innerHTML = currentMili; // This gives us the current time in milliseconds

    // Sets the minimum input date to be today or future
    let yrMin = date.getFullYear(); // Returns 4-digit year
    let mthMin = date.getMonth(); // Returns month, 0-11
    let dyMin = date.getDate(); // Returns day of the month 1-31
    dateSelection.setAttribute('min', (yrMin + "-" + addZero((mthMin + 1)) + "-" + dyMin)); // Adds a zero or else Sept = 9 and wouldn't work

    // timeSelection.setAttribute('min', `${19}:${30}`); Can't do this b/c time must be allowed for other days. 
    // Workaround = to have an if statement to make it dont if yr and day = 0 and others = posotive

    function addZero(x) {
        if (x < 10) {
            x = `0${x}`;
            return x;
        } else {
            return x;
        }
    }

    // Gets the target date and time

    
    btn.addEventListener('click', setTargetDate);
    function setTargetDate() { // output date total milisec
        let targetDate = new Date(dateSelection.value);
        let miliDate = targetDate.getTime(); // Converts it to milisec

        let hr = timeSelection.value.slice(0, 2); // gets hr
        let min = timeSelection.value.slice(3, 5); // gets min
        let miliHr = (((hr) * 3600000) + 1.44e+7); // trying to offset timezone, converts to milli
        let miliMin = (min * 60000); // converts min to milli
        let miliTime = (miliHr + miliMin); // adds the hr and min milli

        let output = miliDate + miliTime; // totals the milli
        outM.innerHTML = output;
    }

    //let countdownBox = document.querySelector('.countdown');

    let cd = inM.textContent - outM.textContent;
    let secConv = Math.round(cd / 1000);
    let sec = (secConv % 60); // number of seconds
    let minConv = Math.floor((secConv - sec) / 60);
    let min = minConv % 60;
    let hrConv = Math.floor((minConv - min) / 60); // this converts it to the unit
    let hr = hrConv % 24; // this makes sure it doesn't exceed it's max
    let dyConv = Math.floor((hrConv - hr) / 24);
    let dy = dyConv % 365;
    let yrConv = Math.floor((dyConv - dy) / 365);
    let yr = yrConv;

    function addZero(x) {
        if (x < 10) {
            x = `0${x}`;
            return x;
        } else {
            return x;
        }
    }

    // Places the countdown in the countdown box
    countdownBox.innerHTML = `${Math.abs(yr)}y:${Math.abs(dy)}d:${addZero(Math.abs(hr))}:${addZero(Math.abs(min))}:${addZero(Math.abs(sec))}`; 
    if ((countdownBox.textContent === 'NaNy:NaNd:NaN:NaN:NaN') || (Math.sign(diff.textContent) === 1)) {
        countdownBox.innerHTML = 'Please input a date and time';
    }

    if (diff.textContent <= 8.64e+7 && diff.textContent > 0) { // If the time is set to be earlier in the day, alert the user
        alert.innerHTML = 'Opps.. Please ensure that "time" is set to a moment in the future!';
        timeSelection.focus();
    } else {
        alert.innerHTML = '';
    }


    if (sec === 0 && min === 0 && hr === 0 && dy === 0 && yr === 0) {
        countdownBox.innerHTML = "DONE!!!";
        // btn.setAttribute('class', 'done'); Part of trying to get text to blink
        rst.setAttribute('style', 'visibility: visible;');
        clearInterval(esc);
    }

    diff.innerHTML = inM.textContent - outM.textContent;  


}

let esc = setInterval(countdown, 1); // Checks the time remaining every 1ms

rst.addEventListener('click', reloadPage);

function reloadPage() {
    location.reload();
}






// Add reset button

/*

update btn needs to change text to reset, and then change to update


*/







/* Attemped to get the "done" text to blink when done
setInterval(colorChange, 500);

function colorChange() {
    if (true) {//(btn.getAttribute('class') === 'done') {
        dateSelection.setAttribute('style', 'color: green;');  //countdownBox
        setTimeout(colorChange, 500);
        dateSelection.setAttribute('style', 'color: red;');
        setTimeout(colorChange, 500);
    }
}
*/






//get light flashing to work



// Old Code

/*
let dateInput = document.querySelector('dateInput');
let timeInput = document.querySelector('timeInput');

let yrOutput = document.querySelector('.yr');
let mthOutput = document.querySelector('.mth');
let dyOutput = document.querySelector('.dy');
let hrOutput = document.querySelector('.hr');
let minOutput = document.querySelector('.min');
let secOutput = document.querySelector('.sec');





function green() {
    countdownBox.setAttribute('style', 'color: green;');
}
function red() {
    countdownBox.setAttribute('style', 'color: red;');
}*/





/*
    // Splices the target date into years, months, days
    let countYr = (setCountDate().slice(0, 4) - 1970);
    let countMth = setCountDate().slice(5, 7);
    let countDy = setCountDate().slice(8, 10);

    let yrMili = (countYr * 31,536,000,000);
    let mthMili = (countMth * 2.628e+9);
    let dyMili = (countDy * 8.64e+7);

    let totalDateMili = (yrMili + mthMili + dyMili);


    let countHr = setCountTime().slice(0, 2);
    let countMin = setCountTime().slice(3, 5);

    let hrMili = (countHr * 3.6e+6);
    let minMili = (countMin * 60000);

    let totalTimeMili = (hrMili + minMili);

    let totalMili = (totalDateMili + totalTimeMili);

    let offset = (totalMili - currentMili);

    outM.innerHTML = offset; // Gets us the difference between our chosen date and the current time


    /*
    let yr = date.getFullYear(); // Returns 4-digit year
    let mth = date.getMonth(); // Returns month, 0-11
    let dy = date.getDate(); // Returns day of the month 1-31
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    */

    // Gets the date and time input values whenever they are changed

    // ==================================

    // need to convert to milisecond, subtract, and convert back

    //let countYr = setCountDate().slice(0, 4);
    //let countMth = setCountDate().slice(5, 7);
    //let countDy = setCountDate().slice(8, 10);






    //yrOutput.innerHTML = `${countYr - yr}y:`;
    
    /*
    if (Math.sign(countMth - (mth + 1)) === -1) { // checks for a negative number
        mthOutput.innerHTML = `${(mth + 1) - countMth}m:`; // current month - month to go to
        yrOutput.innerHTML = `${(countYr - yr) - 1}y:`;
    } else {
        mthOutput.innerHTML = `${countMth - (mth + 1)}m:`; // Added 1 to make it a 1-12 range
    }*/
    /*
    mthOutput.innerHTML = `${countMth - (mth + 1)}m:`; // Added 1 to make it a 1-12 range
    dyOutput.innerHTML = `${countDy - dy}d:`;

    //let countHr = setCountTime().slice(0, 2);
    //let countMin = setCountTime().slice(3, 5);
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

//}

//setInterval(countdown, 1); // Checks the time remaining every 250ms



/*
Todo:
---make it so you can only select times in the future --> done for date
---put addZero function

---need to make it stop at zero


later:
---make the box resive if hidden
---create functions where you can; clean up code
---adject styling




if x = negative
then sub 1, else normal




*/