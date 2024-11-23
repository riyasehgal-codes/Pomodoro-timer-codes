console.log("Running");

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const timerElement = document.getElementById("timer");

let timerleft = 3; // Timer starts at 1500 seconds (25 minutes)
let interval;

const update = () => {
    const minutes = Math.floor(timerleft / 60);
    const seconds = timerleft % 60;

    timerElement.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const startTimer = () => {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        timerleft--;
        update();

        if (timerleft === 0) {
            clearInterval(interval);
            alert("Time is up!");
            timerleft = 1500; // Reset timer
            update();
        }
    }, 1000);
};

const stopTimer = () => {
    clearInterval(interval);
    interval = null; // Reset the interval
};

const resetTimer = () => {
    clearInterval(interval);
    interval = null;
    timerleft = 1500; // Reset timer to 25 minutes
    update();
};

// Event Listeners
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

// Initialize Timer Display
update();
