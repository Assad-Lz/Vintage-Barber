// Script para o menu de navegação responsivo
const mobileMenu = document.getElementById("mobile-menu");
const navUl = document.querySelector("nav ul");

mobileMenu.addEventListener("click", () => {
  navUl.classList.toggle("active"); // Adiciona/remove a classe "active"
});
