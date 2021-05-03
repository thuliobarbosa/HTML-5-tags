const nav = document.getElementsByTagName("nav")[0];
const topo_nav = nav.offsetTop;

window.onscroll = function() {
  fixar_menu_topo();
};

function fixar_menu_topo() {
  if (window.pageYOffset >= topo_nav ) {
    nav.classList.add("fixo_no_topo");
  }
  else {
    nav.classList.remove("fixo_no_topo");
  }
}