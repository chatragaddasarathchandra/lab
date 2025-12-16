let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function render() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t;
    li.onclick = () => removeTask(i);
    list.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value) {
    tasks.push(input.value);
    input.value = "";
    render();
  }
}

function removeTask(i) {
  tasks.splice(i, 1);
  render();
}

async function loadSample() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=5");
    const data = await res.json();
    data.forEach(d => tasks.push(d.title));
    render();
  } catch {
    alert("Error fetching tasks");
  }
}

render();
