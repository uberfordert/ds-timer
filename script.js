function countdown(endDate) {
    let days, hours, minutes, seconds;
    
    endDate = new Date(endDate).getTime();

    if (isNaN(endDate)) {
        return;
    }

    setInterval(calculate, 1000);

    function calculate() {
        let startDate = new Date();
        startDate = startDate.getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);

            minutes = parseInt(timeRemaining / 60);
            seconds = parseInt(timeRemaining % 60);

            document.getElementById("countdown").innerHTML = pad(days, 2) + ":" + pad(hours, 2) + ":" + pad(minutes, 2) + ":" + pad(seconds, 2);
        } else {
            document.getElementById("countdown").innerHTML = "click.";
        }
    }
}

function pad(n, length) {
    let str = '' + n;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}

// Fixed end date: March 22, 2024, at 20:00:00
let endDate = new Date('March 22, 2024 20:00:00').getTime();
countdown(endDate);
