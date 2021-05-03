var num_slide = 1;
mostrar_slide(num_slide);

function mudar_slide(ns) {
  mostrar_slide(num_slide += ns);
}

function slide_atual(ns) {
  mostrar_slide(num_slide = ns);
}

function mostrar_slide(ns) {

  var i;
  var slides = document.getElementsByClassName("slide");
  var indicadores = document.getElementsByClassName("indicador");

  if (ns > slides.length) {
    num_slide = 1;
  }
  if (ns < 1) {
    num_slide = slides.length;
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < indicadores.length; i++) {
    indicadores[i].className = indicadores[i].className.replace("ativo", "");
  }

  slides[num_slide-1].style.display = "block";
  indicadores[num_slide-1].className += " ativo";

}