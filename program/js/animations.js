/**
 * Elmar Builders — animations.js
 * Handles: hero load sequence, scroll-reveal, staggered project cards.
 * Fully respects prefers-reduced-motion.
 */

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Note: the hero's load sequence (image zoom-settle, staged text reveal)
  // runs as pure CSS @keyframes in style.css, so it plays correctly even if
  // JavaScript is slow to run or unavailable. It's fully disabled under
  // prefers-reduced-motion via the CSS media query.

  /* ---- Scroll reveal (Intersection Observer) ------------------------------ */
  var observer = null;

  function makeObserver() {
    return new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
  }

  function applyStagger(container) {
    var items = container.querySelectorAll(".reveal");
    var delay = 0;
    var step = window.innerWidth < 640 ? 70 : 100;
    var maxDelay = 400;

    items.forEach(function (item) {
      if (item.style.transitionDelay) return; // already staggered
      item.style.transitionDelay = delay + "ms";
      delay = Math.min(delay + step, maxDelay);
    });
  }

  function observeReveals() {
    var revealEls = document.querySelectorAll(".reveal:not([data-observed])");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealEls.forEach(function (el) {
        el.classList.add("is-visible");
        el.setAttribute("data-observed", "true");
      });
      return;
    }

    if (!observer) observer = makeObserver();

    // Stagger cards within their shared grid container
    document.querySelectorAll(".projects-grid, .team-grid").forEach(applyStagger);

    revealEls.forEach(function (el) {
      el.setAttribute("data-observed", "true");
      observer.observe(el);
    });
  }

  observeReveals();

  // Re-scan once main.js has injected project cards
  document.addEventListener("projects:rendered", observeReveals);
})();
