function pesquisar() {

  var input, filtro, menu, menu_itens, links;

  input = document.getElementById("pesquisa");
  filtro = input.value.toUpperCase();
  menu = document.getElementById("menu");
  menu_itens = menu.getElementsByTagName("li");

  for (var i = 0; i < menu_itens.length; i++) {
    links = menu_itens[i].getElementsByTagName("a")[0];
    if (links.innerHTML.toUpperCase().indexOf(filtro) > -1) {
      menu_itens[i].style.display = "";
    }
    else {
      menu_itens[i].style.display = "none";
    }
  }

}