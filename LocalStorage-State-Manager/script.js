const key = "user";

// SAVE
function saveData() {
  const name = document.getElementById("name").value;

  const data = {
    name: name
  };

  localStorage.setItem(key, JSON.stringify(data));
  alert("Data Saved!");
}

// GET
function getData() {
  const data = JSON.parse(localStorage.getItem(key));

  if (data) {
    document.getElementById("output").innerText = "Name: " + data.name;
  } else {
    document.getElementById("output").innerText = "No Data Found";
  }
}

// UPDATE
function updateData() {
  const newName = document.getElementById("name").value;

  let data = JSON.parse(localStorage.getItem(key));

  if (data) {
    data.name = newName;
    localStorage.setItem(key, JSON.stringify(data));
    alert("Data Updated!");
  } else {
    alert("No data to update");
  }
}

// DELETE
function deleteData() {
  localStorage.removeItem(key);
  alert("Data Deleted!");
}