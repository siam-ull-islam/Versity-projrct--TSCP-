// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobileMenu');

    // Toggle mobile menu when clicking the hamburger icon
    menuToggle.addEventListener('click', function (event) {
        event.stopPropagation();
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target) && !menuToggle.contains(event.target)) {
            mobileMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a menu link (improves UX)
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
        });
    });
});