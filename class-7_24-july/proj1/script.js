/**
 * Sajid Khan Afridi — Portfolio
 * Vanilla JS: scroll-reveal, mobile nav toggle, active-link highlighting,
 * rotating hero role, navbar blur-on-scroll, animated stat counters.
 */

(function () {
    "use strict";

    /**
     * Toggles the sticky navbar's blurred/scrolled state based on scroll position.
     * @returns {void}
     */
    function initNavbarScroll() {
        const navbar = document.getElementById("navbar");
        if (!navbar) return;

        function update() {
            navbar.classList.toggle("scrolled", window.scrollY > 20);
        }

        window.addEventListener("scroll", update, { passive: true });
        update();
    }

    /**
     * Wires up the hamburger button to open/close the mobile nav menu,
     * and closes the menu whenever a link is clicked.
     * @returns {void}
     */
    function initMobileNav() {
        const toggle = document.getElementById("navToggle");
        const links = document.getElementById("navLinks");
        if (!toggle || !links) return;

        function closeMenu() {
            toggle.classList.remove("open");
            links.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
        }

        toggle.addEventListener("click", function () {
            const isOpen = links.classList.toggle("open");
            toggle.classList.toggle("open", isOpen);
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        links.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMenu);
        });
    }

    /**
     * Highlights the nav link matching the section currently in view.
     * @returns {void}
     */
    function initActiveLinkHighlight() {
        const sections = document.querySelectorAll("main section[id], .hero[id]");
        const navLinks = document.querySelectorAll(".nav-link");
        if (!sections.length || !navLinks.length) return;

        const observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    const id = entry.target.getAttribute("id");
                    navLinks.forEach(function (link) {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === "#" + id
                        );
                    });
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        sections.forEach(function (section) {
            observer.observe(section);
        });
    }

    /**
     * Reveals elements marked with the `.reveal` class as they scroll into view.
     * @returns {void}
     */
    function initScrollReveal() {
        const items = document.querySelectorAll(".reveal");
        if (!items.length) return;

        const observer = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view");
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        items.forEach(function (item) {
            observer.observe(item);
        });
    }

    /**
     * Types out and rotates through a list of roles in the hero section,
     * one character at a time, looping forever.
     * @returns {void}
     */
    function initRotatingRole() {
        const el = document.getElementById("rotatingRole");
        if (!el) return;

        const roles = ["AI Instructor", "Python Developer", "Educator", "Builder"];
        let roleIndex = 0;
        let charIndex = roles[0].length;
        let deleting = false;

        el.textContent = roles[0];

        function tick() {
            const current = roles[roleIndex];

            if (!deleting) {
                charIndex++;
                if (charIndex > current.length) {
                    deleting = true;
                    setTimeout(tick, 1400);
                    return;
                }
            } else {
                charIndex--;
                if (charIndex < 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(tick, 300);
                    return;
                }
            }

            el.textContent = current.slice(0, charIndex);
            setTimeout(tick, deleting ? 45 : 90);
        }

        setTimeout(tick, 1600);
    }

    /**
     * Animates each `.stat-number` counting up from 0 to its `data-target`
     * value once it scrolls into view.
     * @returns {void}
     */
    function initStatCounters() {
        const stats = document.querySelectorAll(".stat-number");
        if (!stats.length) return;

        function animateCount(el) {
            const target = parseInt(el.getAttribute("data-target"), 10) || 0;
            const duration = 1400;
            const start = performance.now();

            function step(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(eased * target);
                if (progress < 1) requestAnimationFrame(step);
            }

            requestAnimationFrame(step);
        }

        const observer = new IntersectionObserver(
            function (entries, obs) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animateCount(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.5 }
        );

        stats.forEach(function (stat) {
            observer.observe(stat);
        });
    }

    /**
     * Fills in the current year in the footer copyright line.
     * @returns {void}
     */
    function initFooterYear() {
        const yearEl = document.getElementById("year");
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    }

    document.addEventListener("DOMContentLoaded", function () {
        initNavbarScroll();
        initMobileNav();
        initActiveLinkHighlight();
        initScrollReveal();
        initRotatingRole();
        initStatCounters();
        initFooterYear();
    });
})();
