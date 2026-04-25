document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in');
    setTimeout(() => {
        fadeElements.forEach(el => el.classList.add('visible'));
    }, 100);

    // Scroll reveal animations
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    // Trigger once on load in case elements are already in view
    checkReveal();
});
