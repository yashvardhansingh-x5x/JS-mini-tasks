// Data with Dates
let data = [
  { name: "Phone", price: 200, date: "2024-01-10" },
  { name: "Laptop", price: 1000, date: "2023-05-20" },
  { name: "Tablet", price: 500, date: "2024-03-15" },
  { name: "Watch", price: 150, date: "2022-12-01" },
  { name: "Camera", price: 700, date: "2023-08-25" }
];

// Render Data
function renderData() {
  let container = document.getElementById("container");

  container.innerHTML = data
    .map(item => `
      <div class="item">
        ${item.name} - ₹${item.price} <br>
        📅 ${item.date}
      </div>
    `)
    .join("");
}

// Sorting Function
function sortData(type) {
  if (type === "priceLow") {
    data.sort((a, b) => a.price - b.price);
  } 
  else if (type === "priceHigh") {
    data.sort((a, b) => b.price - a.price);
  } 
  else if (type === "nameAsc") {
    data.sort((a, b) => a.name.localeCompare(b.name));
  } 
  else if (type === "nameDesc") {
    data.sort((a, b) => b.name.localeCompare(a.name));
  } 
  else if (type === "dateOld") {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
  } 
  else if (type === "dateNew") {
    data.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  renderData();
}

// Event Listener
document.getElementById("sortSelect").addEventListener("change", (e) => {
  sortData(e.target.value);
});

// Initial Render
renderData();