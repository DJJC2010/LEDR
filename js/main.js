document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      const isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  var targets = [];
  var node;
  while ((node = walker.nextNode())) {
    if (node.nodeValue.indexOf("LEDR") !== -1 &&
        node.parentElement &&
        !node.parentElement.closest(".brand, .footer-brand")) {
      targets.push(node);
    }
  }
  targets.forEach(function (node) {
    var parts = node.nodeValue.split("LEDR");
    var frag = document.createDocumentFragment();
    parts.forEach(function (part, i) {
      if (i > 0) {
        frag.appendChild(document.createTextNode("LED"));
        var r = document.createElement("span");
        r.className = "gold-r";
        r.textContent = "R";
        frag.appendChild(r);
      }
      frag.appendChild(document.createTextNode(part));
    });
    node.parentNode.replaceChild(frag, node);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".module-select").forEach(function (sel) {
    sel.addEventListener("change", function () {
      if (this.value) {
        window.open(this.value, "_blank", "noopener");
        this.selectedIndex = 0;
      }
    });
  });
});