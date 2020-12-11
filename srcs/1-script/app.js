// Navbar start

const menuBtn = document.querySelector('.menu-btn');
const navBlock = document.querySelector('.mobile-nav-block');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navBlock.classList.toggle('active');
});

// Navbar end 

// Slider start

const items = document.querySelectorAll('.slide');
const nbSlide = items.length;
const suivant = document.querySelector('#next');
const precedent = document.querySelector('#previous');
const headline = document.querySelector('.headline-slide');

let count = 0;

function nextSlide() {
    headline.classList.remove('animation')
    items[count].classList.remove('active')
    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    if (count == 0) {
        headline.classList.add('animation');
        setTimeout(function(){ headline.classList.remove('animation') }, 800);
        headline.innerHTML = 'guidelines'
    } else if (count == 1) {
        headline.classList.add('animation')
        setTimeout(function(){ headline.classList.remove('animation') }, 800);
        headline.innerHTML = 'merchandise'
    } else if (count == 2) {
        headline.classList.add('animation')
        setTimeout(function(){ headline.classList.remove('animation') }, 800);
        headline.innerHTML = 'web design'
    }

    items[count].classList.add('active')
    console.log(count)
}

suivant.addEventListener('click', nextSlide);

function previousSlide() {
    items[count].classList.remove('active')
    if (count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    if (count == 0) {
        headline.classList.add('animation');
        setTimeout(function(){ headline.classList.remove('animation') }, 800);
        headline.innerHTML = 'guidelines'
    } else if (count == 1) {
        headline.classList.add('animation')
        setTimeout(function(){ headline.classList.remove('animation') }, 800);
        headline.innerHTML = 'merchandise'
    } else if (count == 2) {
        headline.classList.add('animation')
        setTimeout(function(){ headline.classList.remove('animation') }, 800);
        headline.innerHTML = 'web design'
    }

    items[count].classList.add('active')
    console.log(count)
}
precedent.addEventListener('click', previousSlide)