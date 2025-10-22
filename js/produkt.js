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
  
    <div class="grid_2-1">



        <div class="produkt_billede">

            <img src="${data.images[0]}" class="billede_produktside" alt="">

        </div>


        <div class="tekst_information">
            <p class="brand_name">${data.brand}</p>
            <h2 class="h2_produktside">${data.title}</h2>
            <div class="grid_1-1">
                <p class="line-through">Before: € ${data.price}</p>

                <div>
                    <p>${data.discountPercentage ? `€ ${(data.price - data.price * (data.discountPercentage / 100)).toFixed(2)}` : ""}
                    </p>
                    <p class="rabat">-${data.discountPercentage ? `${data.discountPercentage}%` : ""}</p>
                </div>
            </div>

            <div class="product-controls">
                <div class="quantity">
                    <button class="minus">−</button>
                    <span class="number">1</span>
                    <button class="plus">+</button>
                </div>
                <button class="add-to-basket">Add to basket</button>
            </div>
            <h3 class="h3_produktside">About this product</h3>
            <p class="produkt_beskrivelse">${data.description}</p>
      
        </div>

        <div>

        

    </div>

    





    `;
}
