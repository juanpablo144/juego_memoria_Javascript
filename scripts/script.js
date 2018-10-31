// tan pronto carga la pagina inicializa la funcion main
window.onload = main;

var cnt = 0;
var last;
var puntaje = 0;

function main() {
  var list = document.querySelectorAll('div[cl^="card"]');

  for(var i=0;i<list.length;i++)
    list[i].addEventListener('click', function() {
      if(this.className == 'cardBlack') {
        this.className = this.getAttribute('cl');
        if(cnt == 1)
          if(last.className == this.className) {
            puntaje++;
            document.getElementById("puntos").innerHTML = puntaje;
            last.className = this.className = "cardWhite";
          } else {
            setTimeout(function() {
              last.className = this.className = "cardBlack";
            }.bind(this), 300);
            puntaje = puntaje - 0.5;
            document.getElementById("puntos").innerHTML = puntaje;
          }
        else
          last = this;
          cnt = 1 - cnt;
      }
    }, false);

}