const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

// Open Modal
openBtn.addEventListener("click", () => {
  overlay.classList.add("show");
});

// Close Modal Function
function closeModal() {
  overlay.classList.remove("show");
}

// Close Button
closeBtn.addEventListener("click", closeModal);

// 🔥 Outside Click Close
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    closeModal();
  }
});

// 🔥 ESC Key Close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});