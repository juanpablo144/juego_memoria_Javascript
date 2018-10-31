var slideInicio = 1;
    abrirSlide(slideInicio);

    function Slide(n) {
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