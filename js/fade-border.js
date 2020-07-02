function fadeScroll() {
    var arrow = document.getElementsByClassName("arrow-container")[0];
    arrow.style.opacity = 1 - window.pageYOffset * .7 / 600
}

function addListeners() {
    window.addEventListener('scroll', fadeScroll);
}
addListeners();
