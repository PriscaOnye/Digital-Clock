const hours = document.getElementById("timeHour");
const minutes = document.getElementById("timeMins");
const seconds = document.getElementById("timeSecs");
const dayTimeElement = document.getElementById("tellTime");


function updateTime() {
    const currentTime = new Date();

    const recentHour = String(currentTime.getHours()).padStart(2, '0');
    // const recentMinute = String(currentTime.getMinutes()).padStart(2, '0');
    // const recentSecond = String(currentTime.getSeconds()).padStart(2, '0');

    // hours.innerHTML = String(currentTime.getHours()).padStart(2, '0');
    minutes.innerHTML = String(currentTime.getMinutes()).padStart(2, '0');
    seconds.innerHTML = String(currentTime.getSeconds()).padStart(2, '0');

    // Convert to 12-hour format and update AM/PM
    let dayTime = 'AM';

    let hourFormat  = recentHour;

    if(recentHour >= 12){
        dayTime = 'PM';

        if(recentHour > 12){
            hourFormat = String(recentHour - 12);
        }
    } else if (recentHour === '00') {
        hourFormat = '12';
    }

    const displayHour = hourFormat
   hours.innerHTML = displayHour;
    dayTimeElement.innerHTML = dayTime;

    console.log(currentTime);
}

setInterval(updateTime, 1000);

updateTime();
