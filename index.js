const base_btn = document.querySelector(".base_btn");
const close_btn = document.querySelector(".close-btn");
const container = document.querySelector(".container");
const body = document.querySelector("body");

base_btn.addEventListener("click", () => {
   container.classList.toggle("active")
   body.classList.toggle("fade_body")
   base_btn.classList.add("active_base_btn")
})

close_btn.addEventListener("click", () => {
   container.classList.remove("active")
   body.classList.remove("fade_body")
   base_btn.classList.remove("active_base_btn")

})
