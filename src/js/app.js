document.addEventListener('DOMContentLoaded', () => inicarApp())

function inicarApp(){
    crearGaleria()
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