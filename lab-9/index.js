async function loadData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
    const data = await res.json();

    const container = document.getElementById("destinations");
    container.innerHTML = "";

    data.forEach(item => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${item.title}</h3><p>${item.body}</p>`;
      container.appendChild(div);
    });
  } catch (err) {
    alert("Failed to load data");
  }
}
