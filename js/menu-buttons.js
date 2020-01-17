var call = 0;
var fullpage_menu;
var menu;
var bars;

function toggleMenu() {
    if (call === 0){
        fullpage_menu = document.getElementsByClassName("fullpage_menu")[0];
        menu = document.getElementsByClassName("menu")[0];
        bars = document.getElementsByClassName("bar");
    }

    fullpage_menu.classList.toggle("visible_menu");
    menu.classList.toggle("enable_hover");
    for(var i = 0; i < bars.length; i++)
    {
        bars[i].classList.toggle("hoverbar");
    }

    if (call === 0){
        var thispageurl = window.location.href;
        var links = document.getElementsByTagName("a");
        for(var i = 0; i < links.length; i++)
        {
            if (links[i].href === thispageurl)
                links[i].classList.add("disabled_link");
        }
    }

    call++;
}