document.getElementById('hamburger-menu').addEventListener('click', function() {
    this.classList.toggle('open');
    // Toggle the menu visibility here, for example:
    document.querySelector('.navbar-links').classList.toggle('active');
});
