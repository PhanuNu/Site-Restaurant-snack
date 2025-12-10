// Attendre que le HTML soit chargé
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("section[id]");

    // 1) Changer le style de la navbar au scroll
    const handleNavbarScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add("navbar-scrolled");
        } else {
            navbar.classList.remove("navbar-scrolled");
        }
    };

    // 2) Mettre à jour le lien actif dans la navbar
    const handleActiveLink = () => {
        let currentSectionId = null;

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const offsetTop = rect.top + window.scrollY;

            if (window.scrollY >= offsetTop - 120) {
                currentSectionId = section.id;
            }
        });

        if (!currentSectionId) return;

        navLinks.forEach((link) => {
            const href = link.getAttribute("href");
            if (href === `#${currentSectionId}`) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    };

    // 3) Fake envoi du formulaire
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci pour votre message ! Nous vous répondrons bientôt.");
            contactForm.reset();
        });
    }

    // Lancer une première fois
    handleActiveLink();
    handleNavbarScroll();

    // Écouter les événements de scroll
    window.addEventListener("scroll", () => {
        handleNavbarScroll();
        handleActiveLink();
    });
});
