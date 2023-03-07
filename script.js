let topButton = document.getElementById("top-button");

window.onscroll = () => { scrollFunction() };

const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


const onClick = () => {
    let body = document.querySelector('.body');
    body.classList.toggle('stop-scrolling');

    let menu = document.querySelector('.menu');
    menu.classList.toggle('open');

    let hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('open-hamburger');
}

const onClickMenuItem = () => {
    let body = document.querySelector('.body');
    body.classList.remove('stop-scrolling');

    let menu = document.querySelector('.menu');
    menu.classList.remove('open');

    let hamburger = document.querySelector('.hamburger');
    hamburger.classList.remove('open-hamburger');
}