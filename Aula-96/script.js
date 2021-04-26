function abrir_tab(evento, nome_tab) {
  const conteudo_tab = document.getElementsByClassName("conteudo-tab");

  for (var i = 0; i < conteudo_tab.length; i++) {
    conteudo_tab[i].style.display = "none";
  }

  const btn_tabs = document.querySelectorAll("[data-btn-tabs]");
  for (var i = 0; i < btn_tabs.length; i++) {
    btn_tabs[i].classList.remove('active');
  }

  document.getElementById(nome_tab).style.display = "block";
  evento.currentTarget.classList.add("active");

}

document.getElementById("primeiro").click();