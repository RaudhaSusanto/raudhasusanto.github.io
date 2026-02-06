const aboutText = document.getElementById("aboutText");
const changeButton = document.getElementById("btnChange");

changeButton.addEventListener("click", function () {
    aboutText.textContent = "Aku sedang membangun portofolio dan CV online :)";
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});