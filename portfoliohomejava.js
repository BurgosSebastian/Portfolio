const boton = document.querySelector(".btn-port");
const h1 = document.querySelector(".h1");
const h2 = document.querySelector(".h2");
const parrafo = document.querySelector(".parra");

const animacion = ()=> {
    h1.dataset.active = "true" 
    h2.dataset.active = "true"
    parrafo.dataset.active = "true"}

window.setTimeout(animacion,500);