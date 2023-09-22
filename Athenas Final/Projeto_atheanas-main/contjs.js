const targetDate = new Date('2023-09-25T23:59:59').getTime();


const countdownInterval = setInterval(function() {
    const currentDate = new Date().getTime();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
        clearInterval(countdownInterval);
        
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days.toLocaleString('en-US', { minimumIntegerDigits: 2 });
        document.getElementById('hours').innerHTML = hours.toLocaleString('en-US', { minimumIntegerDigits: 2 });
        document.getElementById('minutes').innerHTML = minutes.toLocaleString('en-US', { minimumIntegerDigits: 2 });
        document.getElementById('seconds').innerHTML = seconds.toLocaleString('en-US', { minimumIntegerDigits: 2 });
    }
}, 1000);
