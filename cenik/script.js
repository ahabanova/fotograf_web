// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

mobileMenuBtn.addEventListener("click", () => {
    mobileMenuBtn.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

// Header scroll effect
const header = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Add visible class instead of inline styles
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

// Apply fade-in to pricing cards
document.querySelectorAll(".pricing-card").forEach((card, index) => {
    card.classList.add("fade-in");
    // Add staggered delay via CSS variable
    card.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// Apply fade-in to info items
document.querySelectorAll(".info-item").forEach((item, index) => {
    item.classList.add("fade-in");
    // Add staggered delay via CSS variable
    item.style.transitionDelay = `${index * 0.1}s`;
    observer.observe(item);
});

// Apply fade-in to contact CTA
const contactCTA = document.querySelector(".contact-cta");
if (contactCTA) {
    contactCTA.style.opacity = "0";
    contactCTA.style.transform = "translateY(30px)";
    contactCTA.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(contactCTA);

    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    ctaObserver.observe(contactCTA);
}

// Apply fade-in to contact section
const contactSection = document.querySelector(".contact-section");
if (contactSection) {
    contactSection.style.opacity = "0";
    contactSection.style.transform = "translateY(30px)";
    contactSection.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    sectionObserver.observe(contactSection);
}
