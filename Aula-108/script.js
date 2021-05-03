function mostrar_img(img) {
  const img_grande = document.getElementById("imagem_grande");
  img_grande.src = img.src;
  img_grande.parentElement.style.display = "block";
}

