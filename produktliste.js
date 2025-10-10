console.log("Sitet er loadet");
const produktliste_container = document.querySelector(".produktliste_container");
const url = `https://dummyjson.com/products?limit=50`; //Url til api'et

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
  products.forEach((product) => {
    //Går igennem alle produkter
    produktliste_container.innerHTML += ` <article> 
       <a href=""><img src="${product.thumbnail}" alt="">
    <p>${product.title}</p>
    <p>€ ${product.price}</p></a>
    </article>
`;
  });
}
