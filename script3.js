const indicators = document.querySelectorAll('.indicator');
const images = document.querySelectorAll('.carousel-container .carousel-item');
const carousel = document.querySelector('.carousel-container');
let currentIndex = 0;
let isPlaying = true;

// Default rotation times
let rotationTimes = [
    5700, // Время в миллисекундах для первого вращения
    4200, // Время в миллисекундах для второго вращения
    4100, // Время в миллисекундах для третьего вращения
    4200, // Время в миллисекундах для четвертого вращения
    4200, // Время в миллисекундах для пятого вращения
    4100, // Время в миллисекундах для шестого вращения
    4100, // Время в миллисекундах для седьмого вращения
    4200, // Время в миллисекундах для восьмого вращения
    4200, // Время в миллисекундах для девятого вращения
    4200, // Время в миллисекундах для десятого вращения
    4100, // Время в миллисекундах для одиннадцатого вращения
    4200, // Время в миллисекундах для двенадцатого вращения
    4200, // Время в миллисекундах для тринадцатого вращения
    4200, // Время в миллисекундах для четырнадцатого вращения
    4200  // Время в миллисекундах для пятнадцатого вращения
];

// Adjust rotation times for mobile screens
if (window.innerWidth <= 768) {
    rotationTimes = [
        5500, // Adjusted time for mobile screens
        4500, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000, // Adjusted time for mobile screens
        4000  // Adjusted time for mobile screens
    ];
}

let stopCount = 0; // Счетчик остановок

function updateIndicators(index) {
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

function updateActiveImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

function toggleAnimation(play) {
    carousel.style.animationPlayState = play ? 'running' : 'paused';
    isPlaying = play;
}

function getPauseDelay() {
    return rotationTimes[Math.min(stopCount, rotationTimes.length - 1)];
}

function pauseAtCurrentImage() {
    toggleAnimation(false); // Pause animation
    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        updateIndicators(currentIndex);
        updateActiveImage(currentIndex);
        toggleAnimation(true); // Resume animation
        stopCount++;
        setTimeout(pauseAtCurrentImage, getPauseDelay() + 1500); // Next pause
    }, 1500); // Pause for 1.5 seconds
}

window.addEventListener('load', () => {
    toggleAnimation(false); // Initially stop animation
    setTimeout(() => {
        toggleAnimation(true); // Start animation
        setTimeout(pauseAtCurrentImage, getPauseDelay()); // First pause
    }, 1500); // Initial pause for 1.5 seconds
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateIndicators(currentIndex);
        updateActiveImage(currentIndex);
        toggleAnimation(false);
        setTimeout(() => toggleAnimation(true), 1500);
    });
});

function toggleMenu() {
            document.querySelector('.mobile-menu-links').classList.toggle('active');
            document.querySelector('.burger-icon').classList.toggle('active');
        }
        
        document.getElementById('back_arrow').addEventListener('click', function() {
    window.location.href = 'index.html';  // Replace with the actual URL
});
