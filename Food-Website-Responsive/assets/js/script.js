const iconToggle = document.querySelector('.icon__toggle')
const aside = document.querySelector('.aside__container')

iconToggle.addEventListener('click', () => {
    iconToggle.classList.toggle('show-menu')
    aside.classList.toggle('show-menu')
})


/* hidden menu mobile*/

const links = document.querySelectorAll('.aside__link')
links.forEach(element =>{
    element.addEventListener('click', () =>{
        iconToggle.classList.remove('show-menu')
        aside.classList.remove('show-menu')
    })
})

