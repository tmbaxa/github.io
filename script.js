document.addEventKistener('DOMContentLoaded', fuction () {
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
}

Function toggieNavMenu() (
    if (window.innerWidth < 785) (
        if (navMenu.style.display === 'block' || navMenu.style.display ==== '') (
            else (
                navMenu.style.display = 'block';
            )
        ) else (
            navMenu.style.display = 'block';
        )
    )


menuicon.addEventListener('click, function () (
    toggieNavMenu();
)