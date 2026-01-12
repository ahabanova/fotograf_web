// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navLinks = document.querySelector(".nav-links");

if (mobileMenuBtn && navLinks) {
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
}

// Header scroll effect
const header = document.querySelector(".header");
let headerTicking = false;

function updateHeader() {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
    headerTicking = false;
}

window.addEventListener("scroll", () => {
    if (!headerTicking) {
        window.requestAnimationFrame(updateHeader);
        headerTicking = true;
    }
});

// Scroll to Top Button
const scrollTopBtn = document.querySelector(".scroll-top");
let scrollTicking = false;

function updateScrollButton() {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
    scrollTicking = false;
}

window.addEventListener("scroll", () => {
    if (!scrollTicking) {
        window.requestAnimationFrame(updateScrollButton);
        scrollTicking = true;
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            setTimeout(() => {
                const scrolledY = window.scrollY;
                if (scrolledY > 0) {
                    window.scrollTo({
                        top: scrolledY - 100,
                        behavior: "auto",
                    });
                }
            }, 100);
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
            // INLINE STYLY - animace
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

            setTimeout(() => {
                entry.target.style.opacity = "";
                entry.target.style.transform = "";
                entry.target.style.transition = "";
            }, 800);
        }
    });
}, observerOptions);

// Apply fade-in to pricing cards
document.querySelectorAll(".pricing-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `opacity 0.8s ease-out ${
        index * 0.1
    }s, transform 0.8s ease-out ${index * 0.1}s`;
    observer.observe(card);
});

// Apply fade-in to info items
document.querySelectorAll(".info-item").forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `opacity 0.8s ease-out ${
        index * 0.1
    }s, transform 0.8s ease-out ${index * 0.1}s`;
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
