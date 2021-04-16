const elements = document.querySelectorAll("[data-animation]");
const animationClass = 'animation';

function animationScroll() {
  const pageTopWindow = window.pageYOffset + ((window.innerHeight * 3) / 4);

  elements.forEach( (element) => {
    if (pageTopWindow > element.offsetTop) {
      element.classList.add(animationClass);
    }
    else {
      element.classList.remove(animationClass);
    }
  });

}

if (elements.length) {
  window.addEventListener('scroll', () => {
    animationScroll();
  })
} 

function clickModal(img) {
  const janelaModal = document.getElementById("janelaModal");
  const imgModal= document.getElementById("imgModal");
  const txtModal= document.getElementById("txtModal");
  const btnFechar= document.getElementById("btnFechar");

  janelaModal.classList.remove("escondeJanelaModal");
  janelaModal.classList.add("mostraJanelaModal");

  imgModal.src = img.src;
  imgModal.alt = img.alt;
  txtModal.innerHTML = img.alt; 

  btnFechar.onclick = () => {
    janelaModal.classList.add("escondeJanelaModal");
    janelaModal.classList.remove("mostraJanelaModal");
  }
}