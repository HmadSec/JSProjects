window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var appendSeconds = document.getElementById("seconds")
    var appendTens = document.getElementById("tens")
    var buttonStart = $("button-start")
    var buttonStop = $("button-stop")
    var buttonReset = $("button-reset")
    var interval;
    /*setInterval() method calls a function at specified intervals. it returns an id that is used to stop the execution (clearInterval(intervalID))*/
    /* setInterval() clearInterval() Testing */
    /*var intervalID = setInterval(func, 1000, 'param 1', 'param 2');
    var x = 0;
    function func(a, b) {
        x++;
        console.log(x);
        console.log(a);
        console.log(b);
        if(x > 4) clearInterval(intervalID);
    }*/

    //When buttons are Clicked
    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTime, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonReset.onclick = function () {
        clearInterval(interval);
        seconds = 00;
        tens = 00;
        appendSeconds.innerHTML = '0' + '0';
        appendTens.innerHTML = '0' + '0';
    }

    //Start Timer Function that generates the seconds and tens values to put in the html
    function startTime() {
        /* 
            increase tens by 1, then proceed as follows
            if 0 <= tens <= 9   : tensHTML = '0' + tens
            if 9 < tens <= 99   : tensHTML = tens
            if tens > 99        : increase seconds by 1, secondsHTML = '0' + seconds, reset tens to zero, tensHTML = '0' + tens
            if seconds > 9      : secondsHTML = seconds 
        */
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            if (seconds > 9) {
                appendSeconds.innerHTML = seconds;
            } else {
                appendSeconds.innerHTML = '0' + seconds;
            }
            tens = 0;
            appendTens.innerHTML = '0' + tens;
        }
    }

    function $(element) {
        return document.getElementById(element);
    }
}