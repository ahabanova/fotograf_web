const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');
const sections = document.querySelectorAll("section[id], .section[id]");
let activeSectionTicking = false;

function updateActiveNavLink() {
    const scrollPos = window.scrollY + 150;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (window.scrollY + windowHeight >= documentHeight - 50) {
        navLinksAll.forEach((link) => {
            const href = link.getAttribute("href").substring(1);
            if (href === "kontakt") {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
        activeSectionTicking = false;
        return;
    }

    let currentSection = null;
    let maxVisibility = 0;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");
        const sectionBottom = sectionTop + sectionHeight;

        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + windowHeight;

        const visibleTop = Math.max(viewportTop, sectionTop);
        const visibleBottom = Math.min(viewportBottom, sectionBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        if (visibleHeight > maxVisibility) {
            maxVisibility = visibleHeight;
            currentSection = sectionId;
        }
    });

    if (window.scrollY < 200) {
        navLinksAll.forEach((link) => {
            link.classList.remove("active");
        });
        activeSectionTicking = false;
        return;
    }

    navLinksAll.forEach((link) => {
        const href = link.getAttribute("href").substring(1);

        if (href === currentSection) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });

    activeSectionTicking = false;
}

window.addEventListener("scroll", () => {
    if (!activeSectionTicking) {
        window.requestAnimationFrame(updateActiveNavLink);
        activeSectionTicking = true;
    }
});

window.addEventListener("load", updateActiveNavLink);

window.addEventListener("resize", () => {
    if (!activeSectionTicking) {
        window.requestAnimationFrame(updateActiveNavLink);
        activeSectionTicking = true;
    }
});

setTimeout(updateActiveNavLink, 100);
