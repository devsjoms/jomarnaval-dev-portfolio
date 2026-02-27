const navLinks = document.querySelectorAll(".nav-link");
const navs = document.getElementsByClassName("nav-link");
const myName = document.getElementById("introduce");
const exit = document.getElementById("x-btn");
const popUp = document.getElementById("msg-box");

const body = document.body;

exit.addEventListener('click',()=>{
  popUp.style.display = "none";
  body.classList.remove('no-scroll')
})
function notReady(){
  popUp.style.display = "block";
  body.classList.add('no-scroll')
}
function flexNav() {
  navLinks.forEach(link => {
    link.classList.toggle('open');
  });
}
setTimeout(()=>{
  myName.innerHTML = "Naval"
},2000);

setTimeout(()=>{
  myName.innerHTML = "Jomar."
},4000);


(function () {
    emailjs.init("1fxDC0joc34IySljE");
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop page reload
        emailjs.sendForm(
            "service_ny3v9nx",
            "template_vyz5nmg",
            this
        ).then(function () {
            alert("Message sent successfully!");
        }).catch(function (error) {
            alert("Failed to send message.");
            console.error(error);
        });

    });
});

const dict = {
  "name": "jomar"
}
console.log(dict["name"])