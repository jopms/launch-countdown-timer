var currentDate = Date.now() / 1000; //to give seconds
var birthdayEsteves= 1632960000; //30 Set 
var timeLeft = birthdayEsteves - currentDate;

var secondsLeft = Math.floor(timeLeft % 60);
var minutesLeft = Math.floor((timeLeft/60)%(60));
var hoursLeft = Math.floor((timeLeft/60/60)%60);
var daysLeft = Math.floor(timeLeft/60/60/24);



