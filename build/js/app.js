document.addEventListener('DOMContentLoaded', () => inicarApp())

function inicarApp(){
    crearGaleria()
    scrollNav()
    barraFija()
}

function barraFija(){
    const barra = document.querySelector('.header')
    const festival = document.querySelector('.sobre-festival')
    const body = document.querySelector('body')

    window.addEventListener('scroll', function(){
        let infoScrool = festival.getBoundingClientRect().bottom
        if(infoScrool < 0){
            barra.classList.add('barraFija')
            body.classList.add('body-scroll')
        }else{
            barra.classList.remove('barraFija')
            body.classList.remove('body-scroll')
        }
    })
}

function scrollNav(){
    const links = document.querySelectorAll('.navegacion-principal a')

    links.forEach( enlaces => {
        enlaces.addEventListener('click', function(e){
            e.preventDefault()
            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({behavior: "smooth"})
            
        })
    })
}

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for(let i=1; i <= 12; i++){
        const imagenes = document.createElement('picture')
        imagenes.innerHTML = `
        <source srcset="build/img/thumb/${i}.avif" type="image/avif">
        <source srcset="build/img/thumb/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.png" alt="imagen-galeria">
        `;

        imagenes.onclick = () => mostrarImagen(i)

        galeria.appendChild(imagenes)

    }


    function mostrarImagen(id){
        const imagenes = document.createElement('picture')
        imagenes.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.png" alt="imagen-galeria">
        `;

        const overlay = document.createElement('DIV')
        overlay.appendChild(imagenes)
        overlay.classList.add('overlay')
        overlay.onclick = function(){
            const body = document.querySelector('body')
            body.classList.remove('fijar-body')
            overlay.remove()
        }

        const body = document.querySelector('body')
        body.appendChild(overlay)
        body.classList.add('fijar-body')
        
    }
}