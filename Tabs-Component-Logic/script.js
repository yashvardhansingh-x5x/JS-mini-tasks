const tabs = document.querySelectorAll(".tab");
const content = document.getElementById("content");

// Data for content
const tabData = {
  1: "Content for Tab 1",
  2: "Content for Tab 2",
  3: "Content for Tab 3"
};

// Handle Click
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // 🔥 Remove active from all
    tabs.forEach(t => t.classList.remove("active"));

    // 🔥 Add active to clicked
    tab.classList.add("active");

    // 🔥 Update content
    const tabId = tab.getAttribute("data-tab");
    content.innerText = tabData[tabId];
  });
});