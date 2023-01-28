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

function changeArtist(artists) {
  for (let i = 1; i < 5; i++) {
    let artists_group = document.getElementById(`artists-group${i}`);
    let artists_genres_nav = document.getElementById(`artists-genres-nav${i}`);
    if (!artists_group.hasAttribute("hidden")) {
      artists_group.toggleAttribute("hidden");
      artists_genres_nav.classList.toggle("active");
    }
  }
  document.getElementById(`artists-group${artists}`).toggleAttribute("hidden");
  document
    .getElementById(`artists-genres-nav${artists}`)
    .classList.toggle("active");
}

function changePlaylist(playlistId) {
  for (let i = 1; i < 7; i++) {
    let playlist = document.getElementById(`playlist${i}`);
    if (!playlist.hasAttribute("hidden")) {
      playlist.toggleAttribute("hidden");
    }
  }
  document.getElementById(`playlist${playlistId}`).toggleAttribute("hidden");
}

function changeProduct(productId) {
  for (let i = 1; i < 4; i++) {
    let product = document.getElementById(`products${i}`);
    if (!product.hasAttribute("hidden")) {
      product.toggleAttribute("hidden");
    }
  }
  document.getElementById(`products${productId}`).toggleAttribute("hidden");
}
