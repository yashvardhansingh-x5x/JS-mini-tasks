// Dummy Data
let data = [
  "Apple", "Banana", "Orange", "Mango",
  "Grapes", "Pineapple", "Watermelon"
];

// 🔥 Debounce Function
function debounce(func, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 🔍 Search Function
function search(query) {
  let results = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  render(results);
}

// 🖥️ Render
function render(items) {
  let container = document.getElementById("results");

  container.innerHTML = items
    .map(item => `<div class="item">${item}</div>`)
    .join("");
}

// 🔥 Debounced Version of Search
const debouncedSearch = debounce(search, 500);

// Event Listener
document.getElementById("searchInput").addEventListener("input", (e) => {
  debouncedSearch(e.target.value);
});