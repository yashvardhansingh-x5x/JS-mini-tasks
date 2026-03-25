// Dummy Data
let data = [];
for (let i = 1; i <= 50; i++) {
  data.push("Item " + i);
}

let currentPage = 1;
let itemsPerPage = 5;

// Render Data
function renderData() {
  const container = document.getElementById("dataContainer");
  container.innerHTML = "";

  let start = (currentPage - 1) * itemsPerPage;
  let end = start + itemsPerPage;

  let paginatedItems = data.slice(start, end);

  paginatedItems.forEach(item => {
    let div = document.createElement("div");
    div.className = "item";
    div.innerText = item;
    container.appendChild(div);
  });
}
// better
// container.innerHTML = paginatedItems
//   .map(item => `<div class="item">${item}</div>`)
//   .join("");

// Render Pagination Buttons
function renderPagination() {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  let totalPages = Math.ceil(data.length / itemsPerPage);

  // Previous Button
  let prevBtn = document.createElement("button");
  prevBtn.innerText = "Prev";
  prevBtn.onclick = () => {
    if (currentPage > 1) {
      currentPage--;
      updateUI();
    }
  };
  pagination.appendChild(prevBtn);

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;

    if (i === currentPage) {
      btn.classList.add("active");
    }

    btn.onclick = () => {
      currentPage = i;
      updateUI();
    };

    pagination.appendChild(btn);
  }

  // Next Button
  let nextBtn = document.createElement("button");
  nextBtn.innerText = "Next";
  nextBtn.onclick = () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateUI();
    }
  };
  pagination.appendChild(nextBtn);
}

// Update UI
function updateUI() {
  renderData();
  renderPagination();
}

// Change Items Per Page
document.getElementById("itemsPerPage").addEventListener("change", (e) => {
  itemsPerPage = parseInt(e.target.value);
  currentPage = 1;
  updateUI();
});

// Initial Load
updateUI();