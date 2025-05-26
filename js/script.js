document.addEventListener('DOMContentLoaded', function() {
    const menuToggleButton = document.getElementById('mobile-menu-toggle');
    const mainNavLinks = document.getElementById('main-nav-links');

    if (menuToggleButton && mainNavLinks) {
        menuToggleButton.addEventListener('click', function() {
            mainNavLinks.classList.toggle('is-active');
        });
    }
});
