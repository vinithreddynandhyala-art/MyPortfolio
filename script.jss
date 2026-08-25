// Welcome message when the website loads

window.addEventListener("load", function () {
    console.log("Welcome to Vinith Reddy's Portfolio!");
});


// Smooth scrolling for navigation links

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});