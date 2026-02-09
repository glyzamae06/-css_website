const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");
const navLinks = document.querySelectorAll(".nav-link");

openBtn.addEventListener("click", () => {
  document.body.classList.add("show-mobile-menu");
});

closeBtn.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});


const openCareer = document.getElementById("openCareer");
const careerModal = document.getElementById("careerModal");
const closeCareer = document.getElementById("closeCareer");
const searchInput = document.getElementById("careerSearch");

if(openCareer){
openCareer.onclick = () => careerModal.classList.add("show");
}

if(closeCareer){
closeCareer.onclick = () => careerModal.classList.remove("show");
}

window.onclick = (e)=>{
  if(e.target === careerModal){
    careerModal.classList.remove("show");
  }
}

if(searchInput){
searchInput.addEventListener("keyup", ()=>{
  let value = searchInput.value.toLowerCase();
  document.querySelectorAll(".career-card").forEach(card=>{
    card.style.display = card.innerText.toLowerCase().includes(value)
      ? "block" : "none";
  });
});
}
