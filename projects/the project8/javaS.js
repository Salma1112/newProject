var time = 0;
var start = false;
const watchDiv = document.getElementById("watchDiv");
const startButton = document.getElementById("startButton");

async function startTimer() {
    
    if (!start) {
        start = true;
        startButton.style.cursor = "not-allowed";
        watchDiv.style.animation = "timerAnimation 1s ease 0s infinite alternate forwards";

        while (start) {
            time++;
            watchDiv.innerText = formatHours(time);
            await new Promise(r => setTimeout(r, 1000));
        }
    }
}

function pauseTimer() {
    start = false;
    watchDiv.style.animation = "";
    startButton.style.cursor = "pointer";
}
function stopTimer() {
    pauseTimer();
    startButton.style.cursor = "pointer";
    time = 0;
}

function restartTimer() {
    pauseTimer();
    stopTimer();
    watchDiv.innerText = 0;
    startButton.style.cursor = "pointer";
}

function formatTime() {
    if (time < 60) {
        return`00:${time}`;
    } else {
        const seconds = time%60;
        const minutes = Math.floor(time / 60);
        
        return `${minutes}:${seconds}`;

    }
}

function formatHours(seconds) {
    // Get the number of hours.
    const hours = Math.floor(seconds / 3600);
  
    // Get the number of remaining seconds.
    const remainingSeconds = seconds % 3600;

    const timeSeconds = seconds % 60;
  
    // Get the number of minutes.
    const minutes = Math.floor(remainingSeconds / 60);
  
    // Return the time in hours and minutes format.
    return `${hours}:${minutes}:${timeSeconds}`;
  }

