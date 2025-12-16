class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getDetails() {
    return `${this.name} - ₹${this.price}`;
  }
}

class Electronic extends Product {
  constructor(name, price, warranty) {
    super(name, price);
    this.warranty = warranty;
  }
}

const products = [
  new Electronic("Laptop", 60000, "2 Years"),
  new Electronic("Mobile", 25000, "1 Year")
];

const list = document.getElementById("productList");

products.forEach(p => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>Price: ₹${p.price}</p>
    <p>Warranty: ${p.warranty}</p>
  `;
  list.appendChild(div);
});

function toggleTheme() {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "" : "dark";
}
