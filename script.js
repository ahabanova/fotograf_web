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
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Apply fade-in to sections
document.querySelectorAll(".section").forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(section);
});

// Apply fade-in to gallery items
document.querySelectorAll(".gallery-category").forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `opacity 0.8s ease-out ${
        index * 0.1
    }s, transform 0.8s ease-out ${index * 0.1}s`;
    observer.observe(item);
});
