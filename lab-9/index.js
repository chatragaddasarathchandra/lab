// Simulated API endpoints
const destinationsAPI = "https://jsonplaceholder.typicode.com/photos?_limit=6";
const infoAPI = "https://jsonplaceholder.typicode.com/users?_limit=6";

const content = document.getElementById("content");
const loadBtn = document.getElementById("loadBtn");

// Async/Await function for fetching destinations
async function fetchDestinations() {
  try {
    const response = await fetch(destinationsAPI);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }
}

// Promise chaining for fetching additional info
function fetchInfo() {
  return fetch(infoAPI)
    .then(res => res.json())
    .then(data => data)
    .catch(err => console.error("Error fetching info:", err));
}

// Combine both API calls
async function loadContent() {
  content.innerHTML = "<p>Loading destinations...</p>";

  try {
    const destinations = await fetchDestinations();
    const info = await fetchInfo();

    content.innerHTML = ""; // Clear loading text

    destinations.forEach((place, index) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${place.url}" alt="${place.title}">
        <h3>${place.title.substring(0, 20)}...</h3>
        <p>Guide: ${info[index]?.name || "Unknown"}</p>
        <p>Email: ${info[index]?.email || "N/A"}</p>
      `;

      content.appendChild(card);
    });
  } catch (error) {
    content.innerHTML = "<p>Failed to load content. Try again.</p>";
  }
}

// Event listener
loadBtn.addEventListener("click", loadContent);