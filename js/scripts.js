document.addEventListener("DOMContentLoaded", function() {
    gsap.from("header", { duration: 1, y: -50, opacity: 0 });
    gsap.from("#highlight h2", { duration: 1, x: -100, opacity: 0, delay: 0.5 });
    gsap.from("#highlight p", { duration: 1, x: 100, opacity: 0, delay: 1 });
    gsap.from("#highlight button", { duration: 2, scale: 3, opacity: 0, delay: 0 });
    gsap.from("#about h2", { duration: 1, y: 100, opacity: 0, delay: 0.5 });
    gsap.from("#about p", { duration: 1, y: 50, opacity: 0, stagger: 0.3, delay: 1 });


    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function explore() {
    gsap.to(window, { duration: 2, scrollTo: "#about" });
}
function explore() {
    window.location.href = 'download/download.html'; // Substitua pelo caminho do seu arquivo
}
