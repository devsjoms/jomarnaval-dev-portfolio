const navLinks = document.querySelectorAll(".nav-link");
const navs = document.getElementsByClassName("nav-link");
const myName = document.getElementById("introduce");

function flexNav() {
  navLinks.forEach(link => {
    link.classList.toggle('open');
  });
}

function notReady(){
  alert("not available for now.")
}

setTimeout(()=>{
  myName.innerHTML = "Naval"
},2000);

setTimeout(()=>{
  myName.innerHTML = "Jomar."
},4000);