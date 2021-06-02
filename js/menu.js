/*Menu: Primero Declaramos la consatante del menu hamburquesa, y despues el menu nav.
Después cremos un evento de tipo click a hamburguer y cuando le demos click se va a 
llamar a una alerta. Entonces al menú le seleccionamos la clase spring y le agregamos y quitamos 
la clase spring que hace que se oculte, dependiendo de si la clase o no la tiene.*/
const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread")
})

window.addEventListener('click', e => {
    if (menu.classList.contains('spread') &&
        e.target != menu && e.target != hamburguer) {
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})