/*Aqui lo que haremos sera daclarar como una variable las clases de las galerias  entonces tras esto hacemos 
un foreach que almacena todas nuestras imagenes y cuando la clicamos se dispara un evento que hace que visualicemos la imagen
a mayor tamañano*/
const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenLight) {
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen) => {
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer.style.opacity = '0';
}