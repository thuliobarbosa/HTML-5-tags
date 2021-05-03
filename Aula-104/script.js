function mostrar_dropdown() {
  document.getElementsByClassName("conteudo_dropdown")[0].classList.toggle("mostra_dropdown");
}

window.onclick = function(event) {
  if (!event.target.matches(".btn_dropdown")) {
    var dropdowns = document.getElementsByClassName("conteudo_dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var abrir_dropdown = dropdowns[i];
      if (abrir_dropdown.classList.contains("mostra_dropdown")) {
        abrir_dropdown.classList.remove("mostra_dropdown");
      }
    }
  }
}