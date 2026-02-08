const openBtn = document.getElementById("menu-open-button");
const closeBtn = document.getElementById("menu-close-button");

openBtn.addEventListener("click", ()=>{
  document.body.classList.add("show-mobile-menu");
});

closeBtn.addEventListener("click", ()=>{
  document.body.classList.remove("show-mobile-menu");
});
