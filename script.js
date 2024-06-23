document.addEventListener("DOMContentLoaded", function() {
    const slot1 = document.getElementById("slot1");
    const slot2 = document.getElementById("slot2");
    const slot3 = document.getElementById("slot3");
    const spinButton = document.getElementById("spinButton");
    const loadingBar = document.getElementById("loadingBar");
    const startSound = document.getElementById("startSound");
    const loadingSound = document.getElementById("loadingSound");
    const endSound = document.getElementById("endSound");

    const miejsce1 = [
        "ChandyLamport", "Djikstra", "Dwufazowy", "misra", "jednofazowy",
        "dwufazowy", "konsensus rozgłoszeniowy", "konseunsus hierarchiczny", "Cing ciang", "wektorowy"
    ];
    const miejsce2 = [
        "działa", "nie działa"
    ];
    const miejsce3 = [
        "bez fifo", "z fifo", "z detektorem", "bez detektorwa", "z potwierdzeniem odbioru",
        "z rozgłoszeniem", "z synchronizacją czasu", "z priorytetem", "z redundancją", "z logiką czasową"
    ];

    spinButton.addEventListener("click", function() {
        startSound.play();
        startSound.onended = function() {
            startLoading();
        };
    });

    function startLoading() {
        loadingSound.play();
        loadingBar.style.width = "0";
        let interval1 = setInterval(() => { slot1.textContent = getRandomPhrase(miejsce1); }, 100);
        let interval2 = setInterval(() => { slot2.textContent = getRandomPhrase(miejsce2); }, 100);
        let interval3 = setInterval(() => { slot3.textContent = getRandomPhrase(miejsce3); }, 100);

        setTimeout(() => {
            loadingBar.style.width = "33%";
            clearInterval(interval1);
            slot1.textContent = getRandomPhrase(miejsce1);
        }, 2000);

        setTimeout(() => {
            loadingBar.style.width = "66%";
            clearInterval(interval2);
            slot2.textContent = getRandomPhrase(miejsce2);
        }, 4000);

        setTimeout(() => {
            loadingBar.style.width = "100%";
            clearInterval(interval3);
            slot3.textContent = getRandomPhrase(miejsce3);
        }, 6000);

        setTimeout(() => {
            loadingSound.pause();
            loadingSound.currentTime = 0;
            endSound.play();
        }, 7000);
    }

    function getRandomPhrase(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }
});
