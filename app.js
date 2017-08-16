
window.onload = function(){


    var body = document.body;
    var navLinks = document.querySelectorAll('nav ul li a');
    var animateTime = 900;

        navLinks.forEach(function(link){
            link.addEventListener('click', function(e){scrollHelper(e);},false)
        });



    function scrollHelper (event) {
        event.preventDefault();
        var wantedLocation = document.getElementById(event.target.hash.substr(1)).offsetTop;
        var currentPosition = getPageLocation();

        body.classList.add('in-transition');
        body.style.WebkitTransform = "translate(0, -" + (wantedLocation - currentPosition) + "px)";
        body.style.MozTransform = "translate(0, -" + (wantedLocation - currentPosition) + "px)";
        body.style.transform = "translate(0, -" + (wantedLocation - currentPosition) + "px)";

        window.setTimeout(function () {
            body.classList.remove('in-transition');
            body.style.cssText = "";
            window.scrollTo(0, wantedLocation);
        }, animateTime);
    }

    function getPageLocation() {
        var yScroll;
        if(window.pageYOffset) {
            yScroll = window.pageYOffset;
        } else if (document.documentElement && document.documentElement.scrollTop) {
            yScroll = document.documentElement.scrollTop;
        } else if (document.body) {
            yScroll = document.body.scrollTop;
        }
        return yScroll;
    }

};
