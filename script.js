const hamburger = document.querySelector('#hamburger')
const menu = document.querySelector('#menu')
const hLink = document.querySelectorAll('#hLink')
const moon = document.querySelector('#moon')
const body = document.querySelector('body')

hamburger.addEventListener('click', () =>{
    menu.classList.toggle('hidden')
})

moon.addEventListener('click', () =>{
    body.classList.toggle('dark')
})

hLink.forEach(link=>{
    link.addEventListener('click', () =>{
        menu.classList.toggle('hidden')
})
})