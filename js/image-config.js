/* =========================================================
   IMAGE CONFIG — the ONE place to plug in your own images.
   =========================================================
   Fill in a path or URL for any key below (e.g. "images/alliance-hero.jpg").
   Leave a value as an empty string "" and that spot will keep the
   navy placeholder panel until you add a real image — nothing breaks.
   These same keys are used on every page via [data-image-key="..."].
   ========================================================= */

const IMAGE_CONFIG = {
  // LEDR home
  "home-hero": "images/ledr-hero-banner.png",

  // Alliance page
  "alliance-hero": "",

  // The Designation page
  "designation-hero": "",

  // Launch page
  "launch-hero": "",

  // The Broker Summit page
  "summit-hero": "",
};

document.addEventListener("DOMContentLoaded", function () {
  Object.keys(IMAGE_CONFIG).forEach(function (key) {
    const url = IMAGE_CONFIG[key];
    if (!url) return; // keep placeholder
    document.querySelectorAll('[data-image-key="' + key + '"]').forEach(function (el) {
      const placeholder = el.querySelector(".media-placeholder");
      if (placeholder) placeholder.remove();
      const img = document.createElement("img");
      img.src = url;
      img.alt = el.getAttribute("data-image-alt") || "";
      el.appendChild(img);
    });
  });
});
