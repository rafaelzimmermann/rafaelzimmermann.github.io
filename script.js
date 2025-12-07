// ===================================
// Smooth Scrolling for Navigation Links
// ===================================

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // Mobile Menu Toggle
    // ===================================

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const body = document.body;

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navbar.classList.toggle('active');
            navToggle.classList.toggle('active');
            body.classList.toggle('nav-open');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            // Close mobile menu
            if (window.innerWidth <= 968) {
                navbar.classList.remove('active');
                navToggle.classList.remove('active');
                body.classList.remove('nav-open');
            }

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                // For desktop, account for no navbar height (fixed sidebar)
                // For mobile, account for navbar height
                const offset = window.innerWidth <= 968 ? 80 : 20;
                const targetPosition = targetSection.offsetTop - offset;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Active Navigation Link on Scroll
    // ===================================

    const sections = document.querySelectorAll('.section');

    function highlightNavigation() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Check if we're at the bottom of the page
        const isAtBottom = scrollPosition + windowHeight >= documentHeight - 50;

        if (isAtBottom) {
            // Highlight the last section (Contact)
            navLinks.forEach(link => link.classList.remove('active'));
            const contactLink = document.querySelector('.nav-link[href="#contact"]');
            if (contactLink) {
                contactLink.classList.add('active');
            }
            return;
        }

        // Normal scroll spy logic
        let currentSection = null;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSection = sectionId;
            }
        });

        if (currentSection) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${currentSection}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }

    // ===================================
    // Scroll Animations (Fade In)
    // ===================================

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });

    // ===================================
    // Scroll Event Listeners
    // ===================================

    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Debounce scroll events for better performance
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }

        scrollTimeout = window.requestAnimationFrame(function() {
            highlightNavigation();
        });
    });

    // Initial call
    highlightNavigation();

    // ===================================
    // Company Logo Placeholder Setup
    // ===================================

    const companyLogos = document.querySelectorAll('.company-logo');

    companyLogos.forEach(logo => {
        const company = logo.getAttribute('data-company');

        // Add a placeholder icon or initial
        if (company) {
            const initial = company.charAt(0).toUpperCase();
            logo.textContent = initial;
            logo.setAttribute('title', `${company} logo - add your logo here`);
            logo.style.cursor = 'pointer';
        }
    });

    // ===================================
    // Smooth Page Load Animation
    // ===================================

    window.addEventListener('load', function() {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.3s ease';

        setTimeout(function() {
            document.body.style.opacity = '1';
        }, 100);
    });

    // ===================================
    // Add hover effect to timeline items
    // ===================================

    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });

    // ===================================
    // Console Message
    // ===================================

    console.log('%c👋 Welcome to Rafael Zimmermann\'s Portfolio!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    console.log('%cInterested in the code? Check it out on GitHub!', 'color: #64748b; font-size: 12px;');
});
