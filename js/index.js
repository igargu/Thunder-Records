function collapsed() {
  document.getElementById("collapsed").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".collapsed-nav")) {
    var dropdowns = document.getElementsByClassName("collapsed-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function playSong(song) {
  var music = new Audio(song);
  music.play();
}
