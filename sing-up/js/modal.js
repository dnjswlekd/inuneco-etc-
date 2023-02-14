const modal = document.getElementById("simpleModal");
const modalBtn = document.getElementById("modalBtn");
const closeBtn = document.getElementsByClassName("closeBtn")[0];
const doneBtn = document.getElementsByClassName("doneBtn")[0];
const doneBtn2 = document.getElementsByClassName("doneBtn2")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
doneBtn.addEventListener("click", closeModal);
doneBtn2.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

const openBtn = document.getElementsByClassName("openBtn")[0];
const openCloseBtn = document.getElementsByClassName("openCloseBtn")[0];
const tada = document.getElementById("tada");
const tadaNone = document.getElementById("tada-none");

openCloseBtn.addEventListener("click", doneModal);
openBtn.addEventListener("click", continueModal);

function doneModal() {
  tadaNone.style.display = "none";
  tada.style.display = "block";
}

function continueModal() {
  tadaNone.style.display = "block";
  tada.style.display = "none";
}
