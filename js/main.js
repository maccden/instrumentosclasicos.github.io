window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("scrolling-active", window.scrollY > 0);
});

window.addEventListener("scroll", function () {
    var scroll = document.querySelector(".scrollTop");
    scroll.classList.toggle("active", window.scrollY > 500);
});

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
