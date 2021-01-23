(function() {
  window.onscroll = () => {
    BackToTop();
  };
})();

window.onload = () => {
  fadeOut();
};

function fadeOut() {
  let perloader = document.querySelector(".loader-container");
  fade(perloader, 400);
}

function fade(elem, ms) {
  if (!elem) return;

  if (ms) {
    var opacity = 1;
    var timer = setInterval(function() {
      opacity -= 50 / ms;
      if (opacity <= 0) {
        clearInterval(timer);
        opacity = 0;
        elem.style.display = "none";
        elem.style.visibility = "hidden";
      }
      elem.style.opacity = opacity;
      elem.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    }, 50);
  } else {
    elem.style.opacity = 0;
    elem.style.filter = "alpha(opacity=0)";
    elem.style.display = "none";
    elem.style.visibility = "hidden";
  }
}

function BackToTop() {
  const BTT = document.getElementById("back-to-top");
  if (BTT) {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      BTT.classList.add("btn-active");
    } else {
      BTT.classList.remove("btn-active");
    }
  }
}
