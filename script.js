const startBtn = document.querySelector('.start');
const resetBtn = document.querySelector('.reset');

const start = () => {
    startBtn.classList.contains('started') ? startBtn.classList.remove('started') : startBtn.classList.add('started');
    console.log(startBtn.classList)
    const timer = document.querySelector('.time div');
    if (startBtn.classList.contains('started')) {
        startBtn.textContent = 'stop';
        const startTime = (new Date().getTime());
        let currentTime = (new Date().getTime());
        let interval = setInterval(() => {
            currentTime = (new Date().getTime());
            timer.textContent = (Math.round((currentTime - startTime) / 10) / 100).toFixed(2);
            if (!(startBtn.classList.contains('started'))) clearInterval(interval);
        }, 100);
        resetBtn.addEventListener('click', () => {
            startBtn.classList.remove('started');
            clearInterval(interval);
            startBtn.textContent = 'start';
            timer.textContent = '---';
        });
    } else {
        startBtn.textContent = 'start';
    }
};

startBtn.addEventListener('click', start);