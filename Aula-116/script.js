function manage_images(c) {

  let x, i;

  x = document.getElementsByClassName('img');

  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  if (c == 'all') {
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'block';
    }
  }
  else {
    x = document.getElementsByClassName(c);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'block';
    }
  }

}

var btns = document.getElementsByClassName("btn");
for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function() {
    var btn_current = document.getElementsByClassName("active")[0];
    btn_current.className = btn_current.className.replace("active", "");
    this.className += " active";
  });
}

manage_images("all");