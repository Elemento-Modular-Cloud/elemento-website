var call = 0;

function toggleMenu() {
    call++;
    document.getElementsByClassName("fullpage_menu")[0].classList.toggle("visible_menu");
    document.getElementsByClassName("menu")[0].classList.toggle("enable_hover");
    var bars = document.getElementsByClassName("bar");
    for(var i = 0; i < bars.length; i++)
    {
        bars[i].classList.toggle("hoverbar");
    }

    if (call === 1){
        var thispageurl = window.location.href;
        var links = document.getElementsByTagName("a");
        for(var i = 0; i < links.length; i++)
        {
            if (links[i].href === thispageurl)
                links[i].classList.add("disabled_link");
        }
    }
}