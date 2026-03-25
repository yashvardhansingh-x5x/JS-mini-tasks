// 🔥 Throttle Function
function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    let now = new Date().getTime();

    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Action Function
function handleClick() {
  let output = document.getElementById("output");
  output.innerText = "Clicked at: " + new Date().toLocaleTimeString();
}

// 🔥 Throttled Version
const throttledClick = throttle(handleClick, 1000);

// Event Listener
document.getElementById("btn").addEventListener("click", throttledClick);