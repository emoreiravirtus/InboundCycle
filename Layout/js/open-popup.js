const openPopup = () => {
    window.scrollTo(0, 0);

    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };

    document.querySelector(".popup").style.display = "unset";
    document.querySelector(".blur-panel").style.display = "unset";
}

const closePopup = () => {
    window.onscroll = function() {};
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".blur-panel").style.display = "none";
}