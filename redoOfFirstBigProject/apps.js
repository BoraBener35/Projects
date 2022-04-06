const navSlide = () => {
    const bmenu = document.querySelector(('.bmenu'));
    const nav = document.querySelector('.nav-bar');
    const navLinks = document.querySelectorAll('.nav-bar li');

    bmenu.addEventListener('click', () =>{
         nav.classList.toggle('nav-active');

    });

    navLinks.forEach((link, home)=>{
        link.style.animation = `navBarFade 0.5s ease forwards ${home / 7 + 1}s`;
    });
}

navSlide();