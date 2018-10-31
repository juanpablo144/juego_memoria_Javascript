// tan pronto carga la pagina inicializa la funcion main
window.onload = main;
// variable turno 1 y 0, las posibilidades que tiene de elegir 2 cartas 
var cnt = 0;
// variable en la que guardamos el elemento que se clickea
var last;
// variable para llevar el puntaje
var puntaje = 0;
// funcion ejeutada cuando se carga el documento
function main() {
  // Va y selecciona todas las etiquetas con atributo y las guarda en la variable list
  // que queda como un array
  var list = document.querySelectorAll('div[cl^="card"]');
  // hacemos un for hasta que cumpla el tamaño de la lista
  for(var i=0; i<list.length ;i++)
    // se ejecuta una funcion cuando dan click en algun elemento de la lista (un cuadro)
    list[i].addEventListener('click', function() {
      // revisa si tiene la clase card Black
      if(this.className == 'cardBlack') {
        // si tiene la clase classBlack va y revisa que atributo tiene en cl
        this.className = this.getAttribute('cl');
        // esta condicional mira si ya eligio una o no ha elegido (con eso solo le permite
        // elegir dos cartas y si no se restablece
        if(cnt == 1)
          // compara si tienen la misma clase y si tienen la misma clase eso quiere decir
          // que son pareja
          if(last.className == this.className) {
            // en caso de acierte le incrementa 1 y lo guarda en la variable puntaje
            puntaje++;
            // y va mostrando el puntaje que lleva llamando un Span por el ID
            // y asignandole el valor
            document.getElementById("puntos").innerHTML = puntaje;
            // en caso de que las dos sean correctas queda transparentes
            last.className = this.className = "cardWhite";
          } else {
            // si no son iguales con settimeout cambia la clase a cardblack en 300 milisegundos
            setTimeout(function() {
              last.className = this.className = "cardBlack";
            }.bind(this), 300);
            // y tambien le resta 0.5 osea medio punto al puntaje que lleva
            puntaje = puntaje - 0.5;
            // muestra el puntaje que lleva llamando un Span por el ID
            // y le asigna el valor
            document.getElementById("puntos").innerHTML = puntaje;
          }
        else
          // selecciona el elemento que esta clickeando y lo guarda en la variable last
          last = this;
          //contador de turnos 0 y 1 como lo esplicabamos arriba
          cnt = 1 - cnt;
      }
      //en caso de que no alla un evento click se le da la propiedad falso y no entra en 
      // ninguna condicional
    }, false);

}