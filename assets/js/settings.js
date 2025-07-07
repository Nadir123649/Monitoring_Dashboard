
function openMobileMenu() {
  if (window.innerWidth >= 768) return; // Prevent on desktop

  const sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("w-[70px]");
  sidebar.classList.add("w-[250px]");

  sidebar.classList.add("open");
  document.getElementById("overlay").classList.remove("hidden");
}
// Close sidebar on sidebar arrow click (collapseIcon)
document.getElementById("collapseIcon").addEventListener("click", function (e) {
  if (window.innerWidth < 768) {
    // On mobile, just close the sidebar (don't collapse)
    closeMobileMenu();
  } else {
    // Only collapse on desktop
    toggleCollapse();
  }
});

function closeMobileMenu() {
  const sidebar = document.getElementById("sidebar");

  sidebar.classList.remove("open");

  // Remove fixed/mobile specific styles
  sidebar.classList.remove("fixed", "left-0", "top-0");

  // Restore correct width based on collapse state
  if (collapsed) {
    sidebar.classList.remove("w-[250px]");
    sidebar.classList.add("w-[70px]");
  } else {
    sidebar.classList.add("w-[250px]");
    sidebar.classList.remove("w-[70px]");
  }

  document.getElementById("overlay").classList.add("hidden");
}
// Optional: close sidebar if user clicks a nav link on mobile
const navLinks = document.querySelectorAll("#sidebar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      closeMobileMenu();
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("collapseBtn").addEventListener("click", function () {
    if (window.innerWidth < 768) {
      closeMobileMenu();
    } else {
      toggleCollapse();
    }
  });
});

let collapsed = false; // Sidebar starts expanded
let dropdownOpen = {};

function toggleCollapse() {
  if (window.innerWidth < 768) return; // Don't collapse on mobile

  const sidebar = document.getElementById("sidebar");
  const icon = document.getElementById("collapseIcon");
  const labels = document.querySelectorAll(".sidebar-label");
  const dropdowns = document.querySelectorAll("[id^='dropdown-']");

  collapsed = !collapsed;

  if (collapsed) {
    sidebar.classList.remove("w-[250px]");
    sidebar.classList.add("w-[70px]");
  } else {
    sidebar.classList.remove("w-[70px]");
    sidebar.classList.add("w-[250px]");
  }

  labels.forEach((label) => {
    label.classList.toggle("hidden", collapsed);
  });

  dropdowns.forEach((dropdown) => {
    const id = dropdown.id.replace("dropdown-", "");
    dropdown.classList.toggle("hidden", collapsed || !dropdownOpen[id]);
  });

  if (icon) icon.classList.toggle("rotate-180");
}
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("collapseBtn")
    .addEventListener("click", toggleCollapse);
});

function toggleDropdown(name) {
  if (collapsed) return; // disable dropdown toggle when collapsed

  const dropdown = document.getElementById("dropdown-" + name);
  const icon = document.getElementById("dropdownIcon-" + name);
  const isOpen = !dropdown.classList.contains("hidden");

  // track open state
  dropdownOpen[name] = !isOpen;

  // toggle visibility
  dropdown.classList.toggle("hidden");

  // rotate arrow icon
  if (icon) icon.classList.toggle("rotate-180");
}
