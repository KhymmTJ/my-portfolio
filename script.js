document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
        });
    });
});

const typingElement = document.getElementById('typing');
const text = "Hello!! I'm Khymm Tyrone Javier"
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      typingElement.textContent = "";
      index = 0;
      typeEffect();
    }, 2000);
  }
}

typeEffect();

const viewCVBtn = document.getElementById("view-cv-btn");
const cvModal = document.getElementById("cv-modal");
const closeCV = document.getElementById("close-cv");

viewCVBtn.addEventListener("click", () => {
  cvModal.style.display = "flex";
});

closeCV.addEventListener("click", () => {
  cvModal.style.display = "none";
});

cvModal.addEventListener("click", (e) => {
  if (e.target === cvModal) {
    cvModal.style.display = "none";
  }
});

