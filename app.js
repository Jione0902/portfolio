const swiper = new Swiper(".swiper", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu() {
  const menuToggle = document.querySelector(".menuToggle");
  const nav = document.querySelector(".nav");
  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
}

TypeHangul.type("#target");
document.querySelector("#target").addEventListener("th.endType", () => {
  TypeHangul.type("#target");
});

const modals = document.querySelectorAll(".modal");
const openModalBtns = document.querySelectorAll(".open-btn");

const closeModal = document.querySelector(".close");

for (let i = 0; i < modals.length; i++) {
  openModalBtns[i].addEventListener("click", () => {
    modals[i].showModal();
  });
  modals[i].addEventListener("click", (e) => {
    if (e.target === modals[i]) {
      modals[i].close();
    }
  });
}
