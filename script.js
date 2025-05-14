// Toggle Menu for Mobile View
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('header nav');

    menuIcon.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    // Close menu on outside click
    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});
