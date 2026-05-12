const navLinks = document.querySelector(".nav-links");
const menu = document.querySelector(".menu");

function toggleMenu(){
    navLinks.classList.toggle("active");
}

// close when clicking outside
document.addEventListener("click", function (e) {
    const isClickInsideMenu = menu.contains(e.target);
    const isClickInsideNav = navLinks.contains(e.target);

    if (!isClickInsideMenu && !isClickInsideNav) {
        navLinks.classList.remove("active");
    }
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
  const mode = document.getElementById("mode");
  const allElements = document.querySelectorAll("*");
  if (mode) {
    mode.addEventListener("change", function () {
      allElements.forEach(el => {
        el.style.backgroundColor = this.checked ? "#202020" : "";
        el.style.color = this.checked ? "white" : "";
      });
    });
  }

  window.addEventListener("scroll", () => {
    const nav = document.getElementsByClassName("navs")[0];
    if (!nav) return;

    if (window.scrollY > 0) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  // Certificate slider
  const certImages = [
    "Certificates/scientific_computing_FCC.png",
    "Certificates/ccna_CN1.jpeg",
    "Certificates/softEngr.png",
    "Certificates/pydev.jpg",
    "Certificates/ml.jpg",
    "Certificates/DA_With_AI.jpg"
  ];

  const cert = document.getElementById("crt");
  let currInd = 0;

  if (cert) {
    window.prevImg = function () {
      currInd = (currInd === 0) ? certImages.length - 1 : currInd - 1;
      cert.src = certImages[currInd];
    };

    window.nextImg = function () {
      currInd = (currInd + 1 === certImages.length) ? 0 : currInd + 1;
      cert.src = certImages[currInd];
    };
  }

    emailjs.init("1fxDC0joc34IySljE");

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_nh0zh1e",
        "template_stvcusz",
        this
      )
      .then(() => {
        alert("Message sent successfully!");
        form.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message.");
      });
    });

});