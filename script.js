const navLinks = document.querySelectorAll(".nav-link");

function flexNav() {
  navLinks.forEach(link => {
    link.classList.toggle('open');
  });
}
