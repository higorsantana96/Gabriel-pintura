document.getElementById("menu-alternar").addEventListener("click", function () {
    document.getElementById("menu").classList.toggle("active");
});

document.querySelectorAll("#menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.getElementById("menu").classList.remove("active");
    });
});
