// ============================================================
// BRAND CONFIG — edit these three lines to rebrand the site.
// Everything in the page that shows the company name, domain,
// or contact email is injected from here at load time.
// ============================================================
const BRAND = {
  companyName: "Orquen Labs",           // <- replace with real company name
  domain: "orquenlabs.xyz",    // <- replace with real domain
  contactEmail: "hello@orquenlabs.xyz"
};

// Inject brand values into all elements tagged with data attributes.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-company]").forEach(function (el) {
    el.textContent = BRAND.companyName;
  });
  document.querySelectorAll("[data-domain]").forEach(function (el) {
    el.textContent = BRAND.domain;
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = BRAND.contactEmail;
    if (el.tagName === "A") el.href = "mailto:" + BRAND.contactEmail;
  });
  document.title = BRAND.companyName + " — One Control Plane for Every Robot You Run";
});
