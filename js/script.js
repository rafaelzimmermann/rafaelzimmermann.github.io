document.addEventListener('DOMContentLoaded', () => {
    function calculateDuration(startDate, endDate) {
        const start = new Date(startDate);
        const end = endDate === 'present' ? new Date() : new Date(endDate);

        let years = end.getFullYear() - start.getFullYear();
        let months = end.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (years === 0) {
            return `${months} month${months !== 1 ? 's' : ''}`;
        } else if (months === 0) {
            return `${years} year${years !== 1 ? 's' : ''}`;
        } else {
            return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
        }
    }

    function calculateTotalYears(startDate) {
        const start = new Date(startDate);
        const now = new Date();
        const years = Math.floor((now - start) / (365.25 * 24 * 60 * 60 * 1000));
        return `${years} years`;
    }

    // Update Shopify durations
    const shopifyStart = '2022-02-01';
    const shopifyDuration = calculateDuration(shopifyStart, 'present');

    const shopifyDurationEl = document.getElementById('shopify-duration');
    const shopifyRoleDurationEl = document.getElementById('shopify-role-duration');

    if (shopifyDurationEl) {
        shopifyDurationEl.textContent = shopifyDuration;
    }
    if (shopifyRoleDurationEl) {
        shopifyRoleDurationEl.textContent = shopifyDuration;
    }

    // Update total experience
    const careerStart = '2009-07-01';
    const totalExperience = calculateTotalYears(careerStart);

    const totalExpEl = document.getElementById('total-experience');
    if (totalExpEl) {
        totalExpEl.textContent = totalExperience;
    }


    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');
    if (!navbar || !toggle || !menu) return;
    document.documentElement.classList.add('js-nav');
    function setMenu(open) {
        navbar.classList.toggle('active', open);
        toggle.setAttribute('aria-expanded', String(open));
    }
    toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', event => {
        if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
            setMenu(false);
            toggle.focus();
        }
    });
    document.addEventListener('click', event => {
        if (!navbar.contains(event.target)) setMenu(false);
    });
    const mobile = window.matchMedia('(max-width: 700px)');
    mobile.addEventListener('change', () => setMenu(false));
    const links = [...menu.querySelectorAll('a[href^="#"]')];
    const sections = links.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    function highlight() {
        let current = null;
        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= 150) current = section.id;
        });
        links.forEach(link => {
            const active = link.getAttribute('href') === '#' + current;
            link.classList.toggle('active', active);
            if (active) link.setAttribute('aria-current', 'location');
            else link.removeAttribute('aria-current');
        });
    }
    if (links.length) {
        let scheduled = false;
        window.addEventListener('scroll', () => {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(() => { highlight(); scheduled = false; });
        }, { passive: true });
        highlight();
    } else {
        menu.querySelector('.active')?.setAttribute('aria-current', 'page');
    }
});
