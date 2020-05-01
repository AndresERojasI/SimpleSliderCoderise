/**
 * Primero seleccionamos todas las imágenes que componen el slider,
 * Es decir, las que tienen la clase img_slider. El resultado será un arreglo que
 * en cada posición tendrá cada una de las imagenes.
 */
var imagenes = document.getElementsByClassName("img_slider");
var totalImagenes = imagenes.length;
var slideActual = 0;

// Puede que no existan imagenes, es por eso que debemos validar que si existan
if(totalImagenes > 0){
    // Asignamos las clases de cada imagen, la imágen en la posición 0 siempre
    // será la imagen que se muestre de primero.
    imagenes[0].classList.add("active")

    /**
     * Ahora le asignamos el evento a cada boton
     */
    var botonNext = document.getElementsByClassName("slider_button-next")[0];
    var botonPrev = document.getElementsByClassName("slider_button-prev")[0];

    botonNext.addEventListener('click', moverSiguiente.bind(this));
    botonPrev.addEventListener('click', moverPrevio.bind(this));
} else {
    alert("El slider no tiene imágenes para mostrar.")
}

/**
 * Esta funcion, se encarga de cambiar las clases para que se muestre la siguiente Slide
 */
function moverSiguiente() {
    console.log("next", this.slideActual);
    console.log("images", this.imagenes[0]);
    var imagenes = this.imagenes;

    // Primero Reseteamos las clases
    imagenes[this.slideActual].classList.remove("active");

    if(this.slideActual + 1 >= totalImagenes) {
        this.slideActual = 0;
    } else {
        this.slideActual = this.slideActual + 1;
    }

    // Activamos el siguiente slide
    imagenes[this.slideActual].classList.add("active")
}

/**
 * Esta funcion, se encarga de cambiar las clases para que se muestre la Slide anterior
 */
function moverPrevio() {
    console.log("prev", this.slideActual);
    console.log("images", this.imagenes);
    var imagenes = this.imagenes;

    // Primero Reseteamos las clases
    imagenes[this.slideActual].classList.remove("active");

    if(this.slideActual - 1 < 0) {
        this.slideActual = totalImagenes - 1;
    } else {
        this.slideActual = this.slideActual - 1;
    }
    
    imagenes[this.slideActual].classList.add("active");
}
