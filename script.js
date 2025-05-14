// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function () {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Animate progress rings
document.addEventListener('DOMContentLoaded', function () {
    const progressElements = document.querySelectorAll('.progress-ring');

    progressElements.forEach(function (element) {
        const circle = element.querySelector('.progress-ring__circle');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const progress = parseInt(element.getAttribute('data-progress'));

        circle.style.strokeDasharray = circumference;
        circle.style.strokeDashoffset = circumference - (progress / 100) * circumference;
    });

    // Language level selector
    const levels = document.querySelectorAll('.language-level');
    levels.forEach(level => {
        level.addEventListener('click', function () {
            document.querySelector('.language-level.active').classList.remove('active');
            this.classList.add('active');
        });
    });
});