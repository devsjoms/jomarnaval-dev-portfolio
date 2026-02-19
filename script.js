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