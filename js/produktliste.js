console.log("Sitet er loadet");
const produktliste_container = document.querySelector(".produktliste_container");
const produktliste_overskrift_container = document.querySelector(".produktliste_overskrift_container");
const category = new URLSearchParams(window.location.search).get("category");
const url = `https://dummyjson.com/products/category/${category}`; //Url til api'et

const categoryNames = {
  furniture: "Home",
  "womens-dresses": "Women",
  "mens-shirts": "Men",
  beauty: "Beauty",
  "womens-bags": "Accessories",
};

const categoryDescriptions = {
  furniture: "Welcome to our Home collection! Here you’ll find a wide range of furniture, decor, and accessories designed to make every room in your house both stylish and comfortable. Whether you’re looking to refresh your living room, bedroom, or workspace, we have everything you need to create a space that truly feels like home.",
  "womens-dresses": "Explore our Women’s collection featuring stylish dresses, tops, and accessories for every occasion. Whether you’re looking for everyday essentials, office wear, or something special for a night out, our selection is designed to help you feel confident and fashionable every day.",
  "mens-shirts": "Explore our Men’s collection featuring stylish clothing, accessories, and essentials for every occasion. From casual wear to office-ready outfits and evening attire, our selection is designed to help you look and feel your best every day.",
  beauty: "Explore our Beauty collection featuring skincare, fragrances, and cosmetics designed to help you look and feel your best. From daily essentials to indulgent treats, our products are carefully selected to enhance your natural beauty and bring confidence to your everyday routine.",
  "womens-bags": "Explore our Accessories collection, featuring bags, belts, jewelry, and more to complete every outfit. Whether you’re looking for everyday essentials or statement pieces for special occasions, our selection helps you add style and personality to your look.",
};

function getData(url) {
  //Henter data fra APIét og sender det videre til funktionen showProducts
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showProducts(data.products);
    });
}

getData(url); //Kalder funktionen getData

function showProducts(products) {
  const displayCategory = categoryNames[category] || category;
  const description = categoryDescriptions[category] || "";
  produktliste_overskrift_container.innerHTML += `<h1 class = "category_overskrift">${displayCategory}<h1/> <p class="category_description">${description}</p>`;
  products.forEach((product) => {
    //Går igennem alle produkter,
    produktliste_container.innerHTML += ` <article> 
       <a href="produkt.html?id=${product.id}"><img src="${product.thumbnail}" alt="">
    <p>${product.title}</p>
    <p>€ ${product.price}</p></a>
    </article>
`;
  });
}
