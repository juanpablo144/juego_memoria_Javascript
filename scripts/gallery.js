// se inicializa el valor de slideIncio en el primero
var slideInicio = 1;
//ejecuta la funcion abrir slide enviandole slideInicion y alla lo resive como "n"
abrirSlide(slideInicio);
// funcion que se inicializa al momento de que da click en el arrow o flecha
// pasandole la variable n que puede ser 1 en caso de que lo quiera pasar y -1 en 
// caso de retroceder
function Slide(n) {
    // ejecuta la funcion abrirslide enviandole slideInicio sumandole n en caso de que quiera
    // que paso o restandole 1 en caso de que retroceda
    abrirSlide(slideInicio += n);
}

function abrirSlide(n) {
    // seleccionamos todas las imagenes o (banners)
    var slides = document.getElementsByClassName("banner");
    // en caso de que llegue al ultimo vuelva al numero 1
    if (n > slides.length){slideInicio = 1}
    // en caso de que llegue al primero y quiera retroceder vaya al numero ultimo
    if (n < 1) {slideInicio = slides.length}
    // coloca todos los banner ocultos
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // aca pone visible el que deseemos
    slides[slideInicio-1].style.display = "block";
}