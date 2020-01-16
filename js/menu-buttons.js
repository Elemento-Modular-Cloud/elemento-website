function toggleMenu() {
    document.getElementsByClassName("fullpage_menu")[0].classList.toggle("visible_menu");
    document.getElementsByClassName("menu")[0].classList.toggle("enable_hover");
    var bars = document.getElementsByClassName("bar");
    for(var i = 0; i < bars.length; i++)
    {
        bars[i].classList.toggle("hoverbar");
    }

    var thispageurl = window.location.href;
    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        if (links[i].href === thispageurl)
            links[i].classList.toggle("disabled_link");
    }
}