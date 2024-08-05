const toggler = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');
const navItems = document.querySelectorAll('.navItem');

navItems.forEach((ele) => {
    if (ele.querySelector('.subNav')) {
        ele.addEventListener('click', (e) => {
            e.preventDefault();
            ele.classList.toggle('sactive');
        });
    }
});

toggler.addEventListener('click', (e) => {
    e.preventDefault();
    navbar.classList.toggle('active');
    toggler.querySelector('a').innerHTML = navbar.classList.contains('active') ? '<i class="fas fa-window-close"></i>' : '<i class="fas fa-bars"></i>';
});