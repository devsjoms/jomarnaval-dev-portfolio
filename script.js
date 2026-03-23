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
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
document.addEventListener("DOMContentLoaded", function () {
  
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
        event.preventDefault();
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

window.addEventListener("scroll",() =>{
  const isScrolled = document.getElementsByClassName("navs")[0];
  if(window.scrollY > 0){
    isScrolled.classList.add("scrolled");
  }
  else{
    isScrolled.classList.remove("scrolled");
  }
});

const certImages = [
  "Certificates/scientific_computing_FCC.png",
  "Certificates/ccna_CN1.jpeg",
  "Certificates/softEngr.png",
  "Certificates/hrPyBasic.png",
  "Certificates/py.png",
  "Certificates/pyinter.jpg",
  "Certificates/pydev.jpg",
  "Certificates/java.jpg",
  "Certificates/cpp.png",
  "Certificates/ml.jpg",
  "Certificates/DA_With_AI.jpg"
];

const cert = document.getElementById("crt")
let currInd = 0;

function prevImg(){
  if(currInd === 0){
    currInd = certImages.length -1
  }
  currInd--;
  cert.src = certImages[currInd]
}
function nextImg(){
  currInd++;
  if(currInd === certImages.length){
    currInd = 0
  }
  cert.src = certImages[currInd]
}


const projImages = ["project logos/image.png",
  "project logos/jcnlp-web.png"
]

document.getElementById("proj-btn").addEventListener("click", () =>{
  
})