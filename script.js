const burger = document.getElementById("burger");
const menu = document.getElementById("mobileMenu");
const contactsToggle = document.getElementById("contactsToggle");
const contactsDropdown = document.getElementById("contactsDropdown");

burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

contactsToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  contactsDropdown.classList.toggle("hidden");
});

document.addEventListener("click", () => {
  contactsDropdown.classList.add("hidden");
});

const menuBackdrop = document.getElementById("menuBackdrop");
menuBackdrop.addEventListener("click", () => {
  menu.classList.add("hidden");
});