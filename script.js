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


window.addEventListener("scroll", muncul);

function muncul(){
    let elements = document.querySelectorAll(".elemen");
    for(let i=0; i < elements.length; i++){
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 120;
        if(jarakAtasElemen < tinggiLayar - ukuranScroll){
            elements[i].classList.add("tampil")
    }else{
        elements[i].classList.remove("tampil");
    }
}
}


window.addEventListener("scroll", kanan);

function kanan(){
    let elements = document.querySelectorAll(".element");
    for(let i=0; i < elements.length; i++){
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 120;
        if(jarakAtasElemen < tinggiLayar - ukuranScroll){
            elements[i].classList.add("kanan")
    }else{
        elements[i].classList.remove("kanan");
    }
}
}

window.addEventListener("scroll", kiri);

function kiri(){
    let elements = document.querySelectorAll(".elements");
    for(let i=0; i < elements.length; i++){
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = 100;
        if(jarakAtasElemen < tinggiLayar - ukuranScroll){
            elements[i].classList.add("kiri")
    }else{
        elements[i].classList.remove("kiri");
    }
}
}
window.addEventListener("scroll", kusus);

function kusus(){
    let elements = document.querySelectorAll(".elementst");
    for(let i=0; i < elements.length; i++){
        let tinggiLayar = window.innerHeight;
        let jarakAtasElemen = elements[i].getBoundingClientRect().top;
        let ukuranScroll = -10;
        if(jarakAtasElemen < tinggiLayar - ukuranScroll){
            elements[i].classList.add("kusus")
    }else{
        elements[i].classList.remove("kusus");
    }
}
}
 


