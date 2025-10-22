console.log("Sitet er loaded");
const menu_container = document.querySelector(".menu_container");

getData("https://dummyjson.com/products/categories");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => visKategorier(data)));
}

function visKategorier(kategori) {
  console.log("categoires: ", kategori);
  menu_container.innerHTML = `
            <ul class="menu">
                <li><a href="index.html">News</a></li>
                <li><a href="produktliste.html?category=${kategori[2].slug} ">Home</a></li>
                <li><a href="produktliste.html?category=${kategori[20].slug}">Women</a></li>
                <li><a href="produktliste.html?category=${kategori[7].slug}">Men</a></li>
                <li><a href="produktliste.html?category=${kategori[0].slug}">Beauty</a></li>
                <li><a href="produktliste.html?category=${kategori[19].slug}">Accessories</a></li>
            </ul>
        
        `;
}

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}
