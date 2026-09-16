/**
 * Elmar Builders — main.js
 * Handles: mobile menu, sticky nav state, project card rendering.
 */

(function () {
  "use strict";

  /* ---- Footer year --------------------------------------------------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- Sticky / scrolled navigation ----------------------------------- */
  var nav = document.getElementById("siteNav");

  function updateNavState() {
    if (!nav) return;
    if (window.scrollY > 40) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  }
  updateNavState();
  window.addEventListener("scroll", updateNavState, { passive: true });

  /* ---- Mobile menu ------------------------------------------------------ */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");

  function closeMenu() {
    if (!menu || !toggle) return;
    menu.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open menu");
    document.body.style.overflow = "";
  }

  function openMenu() {
    if (!menu || !toggle) return;
    menu.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close menu");
    document.body.style.overflow = "hidden";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  /* ---- Project card rendering ------------------------------------------- */
  var STATUS_LABEL = {
    completed: "Completed",
    "in-progress": "In progress"
  };

  function projectCard(project) {
    var article = document.createElement("article");
    article.className = "project-card reveal";

    var statusClass = project.status === "in-progress" ? "status status--progress" : "status";
    var statusText = STATUS_LABEL[project.status] || project.status;

    article.innerHTML =
      '<div class="project-card__frame">' +
        '<img src="' + project.image + '" alt="' + project.name + ', ' + project.type.toLowerCase() + ' in ' + project.location + '" loading="lazy">' +
      "</div>" +
      '<div class="project-card__info">' +
        "<div>" +
          '<h3 class="project-card__name">' + project.name + "</h3>" +
          '<p class="project-card__meta">' + project.location + " &middot; " + project.type + "</p>" +
        "</div>" +
        '<span class="' + statusClass + '">' + statusText + "</span>" +
      "</div>";

    return article;
  }

  function renderInto(containerId, list) {
    var container = document.getElementById(containerId);
    if (!container || typeof PROJECTS === "undefined") return;
    list.forEach(function (project) {
      container.appendChild(projectCard(project));
    });
  }

  if (typeof PROJECTS !== "undefined") {
    // Home page: featured projects
    renderInto("featuredProjects", PROJECTS.filter(function (p) { return p.featured; }));

    // Projects page: split by status
    renderInto("currentProjects", PROJECTS.filter(function (p) { return p.status === "in-progress"; }));
    renderInto("completedProjects", PROJECTS.filter(function (p) { return p.status === "completed"; }));
  }

  // Let the animation module know new .reveal elements may have been added.
  document.dispatchEvent(new CustomEvent("projects:rendered"));
})();
