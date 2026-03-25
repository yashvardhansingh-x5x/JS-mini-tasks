// Sample data
const items = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// Search function
function searchFilter(query) {
  return items.filter(item => 
    item.toLowerCase().includes(query.toLowerCase())
  );
}

const searchBox = document.getElementById("searchBox");
const listItems = document.querySelectorAll("#list li");

searchBox.addEventListener("input", function () {
  const query = searchBox.value.toLowerCase();

  listItems.forEach(item => {
    const text = item.textContent.toLowerCase();

    if (text.includes(query)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});