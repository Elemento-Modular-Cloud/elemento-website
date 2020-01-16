function toggleMenu() {
    document.getElementsByClassName("fullpage_menu")[0].classList.toggle("visible_menu");
    document.getElementsByClassName("menu")[0].classList.toggle("enable_hover");
    var bars = document.getElementsByClassName("bar");
    for(var i = 0; i < bars.length; i++)
    {
        bars.item(i).classList.toggle("hoverbar");
    }
}