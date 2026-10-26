const menu = document.getElementById("burger");
const link = document.getElementById("links");
const closeMenu = document.getElementById("close");

menu.addEventListener("click", function() {
link.classList.toggle("active")
})
closeMenu.addEventListener("click", function() {
link.classList.toggle("active")
})