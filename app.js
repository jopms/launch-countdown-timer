function addZero (time){
    if (time <10){
        return ("0"+time);
    }else return time
}

function changeHTML () {
    var currentDate = Date.now() / 1000; //to give seconds
    var birthdayEsteves = 1632960000; //30 Set 
    var timeLeft = birthdayEsteves - currentDate;
    var secondsLeft = Math.floor(timeLeft % 60);
    var minutesLeft = Math.floor((timeLeft/60)%(60));
    var hoursLeft = Math.floor((timeLeft/60/60)%60);
    var daysLeft = Math.floor(timeLeft/60/60/24);
    document.getElementById("days").innerHTML = daysLeft;
    document.getElementById("shadow-number").innerHTML = daysLeft;
    document.getElementById("hours").innerHTML = addZero(hoursLeft);
    document.getElementById("minutes").innerHTML = addZero(minutesLeft);
    document.getElementById("seconds").innerHTML = addZero(secondsLeft);
}



var refresh = setInterval(changeHTML, 1000)
