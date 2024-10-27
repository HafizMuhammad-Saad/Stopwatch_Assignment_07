const display = document.querySelector('#display');
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');

let nanoscnd = 0;
let msecond = 0;
let second = 0;
let minutes = 0;
let hour = 0;

let intervalId = null;
function displayTimer() {
    // const html = ` ${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}:${msecond.toString().padStart(2, '0')}`
    const html = `
    <span>${String(hour).padStart(2, '0')}</span>:<span>${String(minutes).padStart(2, '0')}</span>:<span>${String(second).padStart(2, '0')}</span>.<span>${String(msecond)}</span><small>${String(nanoscnd).padStart(2, '0')}</small>
    `
    // <small>${String(nanoscnd).padStart(2, '0')}</small>
    display.innerHTML = html;
}
function startTimer() {
    if (!intervalId) {
        intervalId = setInterval(() => {
            nanoscnd += 10;
            if (nanoscnd === 100) {
                nanoscnd = 0;
                msecond++;
            }
            if (msecond === 10) {
                msecond = 0;
                second++;
            }
            if (second === 60) {
                second = 0;
                minutes++
            }
            if (minutes === 60) {
                minutes = 0;
                hour++
            }



            displayTimer();
        }, 10);
    }
}
function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}
function resetTimer() {
    stopTimer();
    nanoscnd = 0;
    msecond = 0;
    second = 0;
    minutes = 0;
    hour = 0;
    displayTimer();
}

// console.log(startTimer());

start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)

reset.addEventListener('click', resetTimer)
