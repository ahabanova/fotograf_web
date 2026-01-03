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

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");
const currentImageSpan = document.getElementById("current-image");
const totalImagesSpan = document.getElementById("total-images");

let currentIndex = 0;
const images = Array.from(galleryItems).map((item) => item.dataset.image);

totalImagesSpan.textContent = images.length;

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    currentImageSpan.textContent = currentIndex + 1;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex];
    currentImageSpan.textContent = currentIndex + 1;
}

function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
    currentImageSpan.textContent = currentIndex + 1;
}

galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
nextBtn.addEventListener("click", showNext);
prevBtn.addEventListener("click", showPrev);

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "ArrowLeft") showPrev();
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

// Apply fade-in to gallery items
galleryItems.forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `opacity 0.8s ease-out ${
        index * 0.1
    }s, transform 0.8s ease-out ${index * 0.1}s`;
    observer.observe(item);
});

// Apply fade-in to contact section
const contactSection = document.querySelector(".contact-section");
if (contactSection) {
    contactSection.style.opacity = "0";
    contactSection.style.transform = "translateY(30px)";
    contactSection.style.transition =
        "opacity 0.8s ease-out, transform 0.8s ease-out";
    observer.observe(contactSection);
}
