const button = document.getElementById("user-menu-button");
const menu = document.getElementById("popup-menu");

button.addEventListener("click", () => {
  menu.classList.add("absolute");
  menu.classList.toggle("hidden");
});
