(function () {
var starFieldWidth = screen.width;
var starFieldHeight = screen.height;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) {
    starFieldWidth = document.documentElement.clientWidth;
    starFieldHeight = document.documentElement.clientHeight;
}

var starNumber = starFieldWidth * starFieldHeight /100000 * 13;

addStars(starFieldWidth, starFieldHeight, starNumber);
animateStars(starFieldHeight);
})();

function getStarColor(index) {
    if (index % 5 == 0)
    return 'red';
    else if (index % 3 == 0)
    return 'yellow';
    else if (index % 2 == 0)
    return 'blue';
    else
    return 'white';
}

function getStarDistance(index) {
    if (index % 5 == 0)
    return '';
    else if (index % 4 == 0)
    return 'near';
    else if (index % 3 == 0)
    return 'far';
    else
    return '';
}

function getStarRelativeSpeed(index) {
    return (index % 2) + 1.;
}
  
function addStars(starFieldWidth, starFieldHeight, noOfStars) {
var starField = document.getElementById('starfield');
var numberOfStars = noOfStars;

    for (var i = 0; i < numberOfStars; i++) {
        var star = document.createElement('div');
        star.className = 'star' + ' ' + getStarColor(i) + ' ' + getStarDistance(i);
        var topOffset = Math.floor((Math.random() * starFieldHeight) + 1);
        var leftOffset = Math.floor((Math.random() * starFieldWidth) + 1);
        star.style.top = topOffset + 'px';
        star.style.left = leftOffset + 'px';
        star.style.position = 'absolute';
        if(star) starField.appendChild(star);
    }
}

function animateStars(starFieldHeight) {
    var starField = document.getElementById('starfield');
    var stars = starField.childNodes;

    var currentTop = 0;
    var topChangeAmount = 0.;
    var vw = window.innerWidth+"px";

    setInterval(function() {
        if(window.pageYOffset < starFieldHeight){
            for (var i = 1; i < stars.length; i++) {
                if(stars[i].style.right <= vw){
                    currentTop = parseInt(stars[i].style.top, 10);
                    topChangeAmount = getStarRelativeSpeed(i);
                    stars[i].style.top = ((currentTop + topChangeAmount) % starFieldHeight) + 'px';
                }
            }
        }
    }, 75);
}  