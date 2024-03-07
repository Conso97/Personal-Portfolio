function toggleMenu() {
    const menu = document.querrySelector(".menu-links");
    const icon = document.querrySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}