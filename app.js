function addZero (time){
    if (time <10){
        return ("0"+time);
    }else return time
}

function changeHTML () {
    var currentDate = Date.now() 
    var birthdayEsteves = 1628035200000; //4 august
    var timeLeft = birthdayEsteves - currentDate;
    var secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);
    var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    document.getElementById("days").innerHTML = daysLeft;
    document.getElementById("hours").innerHTML = addZero(hoursLeft);
    document.getElementById("minutes").innerHTML = addZero(minutesLeft);
    document.getElementById("seconds").innerHTML = addZero(secondsLeft);
    document.getElementById("shadow-days").innerHTML = daysLeft;
    document.getElementById("shadow-hours").innerHTML = addZero(hoursLeft);
    document.getElementById("shadow-minutes").innerHTML = addZero(minutesLeft);
    document.getElementById("shadow-seconds").innerHTML = addZero(secondsLeft);
}



var refresh = setInterval(changeHTML, 1000)
