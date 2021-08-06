const iconMenu = document.querySelector('#id-menu'),
    iconMenu2 = document.querySelector('#id-menu-2'),
    menu = document.querySelector('#nav');



iconMenu.addEventListener('click', e => {
    menu.classList.toggle('active');
});

iconMenu2.addEventListener('click', e => {
    menu.classList.toggle('active');
});

