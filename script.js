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

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const data = {
        name: document.getElementById("name")?.value,
        email: document.getElementById("user-email")?.value,
        message: document.getElementById("message-box")?.value,
        date: new Date()
      };

      const response = await fetch("/api/save-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      alert(result.message);
    });
  }

});