const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBraanding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (!showMenu) {
		menuBtn.classList.add("close");
		menu.classList.add("show");
		menuNav.classList.add("show");
		menuBraanding.classList.add("show");
		navItems.forEach((item) => item.classList.add("show"));
		showMenu = true;
	} else {
		menuBtn.classList.remove("close");
		menu.classList.remove("show");
		menuNav.classList.remove("show");
		menuBraanding.classList.remove("show");
		navItems.forEach((item) => item.classList.remove("show"));
		showMenu = false;
	}
}

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape") {
		if (showMenu) {
			toggleMenu();
		}
	}
});
