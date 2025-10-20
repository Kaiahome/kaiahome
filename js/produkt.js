console.log("Sitet er loaded");

const id = new URLSearchParams(window.location.search).get("id");
const productUrl = "https://dummyjson.com/products/" + id;
const produkt_container = document.querySelector(".produkt_container");

function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

getData();

function show(data) {
  console.log("Shows data er: ", data);
  produkt_container.innerHTML = ` 
    <img src="${data.images[0]}" alt="">
    <a href="">${data.brand}</a>   
    <h2>${data.title}</h2>
    <p>€ ${data.price}</p>
    <p>${data.discountPercentage ? `€ ${(data.price - data.price * (data.discountPercentage / 100)).toFixed(2)}` : ""}</p>
    <p>${data.discountPercentage ? `${data.discountPercentage}%` : ""}</p>
    <div class="product-controls">
        <div class="quantity">
            <button class="minus">−</button>
            <span class="number">1</span>
            <button class="plus">+</button>
        </div>
            <button class="add-to-basket">Add to basket</button>
        </div>
    <h3>About this product</h3>
    <p>${data.description}</p>
    `;
}
