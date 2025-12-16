const books = [
  { title: "JavaScript Basics", price: 450 },
  { title: "HTML & CSS", price: 350 },
  { title: "Bootstrap Guide", price: 400 },
  { title: "React Intro", price: 500 }
];

function displayBooks() {
  const list = document.getElementById("bookList");
  list.innerHTML = ""; // clear previous content

  books.forEach(book => {
    const col = document.createElement("div");

    // RESPONSIVE GRID
    col.className = "col-12 col-sm-6 col-md-4 mb-4";

    col.innerHTML = `
      <div class="card h-100 shadow-sm text-center">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Price: ₹${book.price}</p>
        </div>
      </div>
    `;

    list.appendChild(col);
  });
}

displayBooks();
