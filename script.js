document.addEventListener('DOMContentLoaded', () => {
    // Add animation for fading in elements
    const fadeElements = document.querySelectorAll('.fade-in');

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    fadeElements.forEach(el => fadeInObserver.observe(el));

    console.log("Animations initialized!");

});

document.addEventListener('DOMContentLoaded', () => {
    const funFactsNav = document.querySelector('nav a[href="/fun-facts"]');
    if (funFactsNav) {
        funFactsNav.addEventListener('mouseover', () => {
            console.log("Get ready for some fun facts!");
        });
    }
});
