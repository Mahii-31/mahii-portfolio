// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = document.querySelector(link.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    const character = document.querySelector('.character');
    let position = 0;
    setInterval(() => {
        position += 5;
        character.style.left = position + 'px';
        if (position > window.innerWidth) {
            position = -100;
        }
    }, 100);
});
