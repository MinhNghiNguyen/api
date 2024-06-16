function addProduct(product) {
  const productHTML = `
    <div class="product_storage" id="${product.name}">
      <img class="production-image" src="data:image/png;base64,${product.image}" alt="${product.name}">
      <p class="product_name">${product.name}</p>
      <h4 class="production-price">${product.unit_price} ${product.price}</h4>
      <p class="product_desc">${product.short_desc}</p>
      <span class="production-sale"><p>${product.discount ? `-${product.discount}%` : `${product.tag}`}</p></span>
      <div>
        <button class="add_to_cart">Add to cart</button>
        <a href=""><span class="material-symbols-outlined">share</span>Share</a>
        <a href=""><span class="material-symbols-outlined">compare_arrows</span>Compare</a>
        <a href=""><span class="material-symbols-outlined">thumb_up</span>Like</a>
      </div>
    </div>
  `;

  return productHTML;
}

async function loadProducts() {
  const x = await fetch("https://dummyapi-0uzr.onrender.com/products");
  const products = await x.json();

  const productContainer = document.getElementById("products");

  products.forEach((product) => {
    const productHTML = addProduct(product);
    productContainer.insertAdjacentHTML("beforeend", productHTML);
  });
  localStorage.setItem("products", JSON.stringify(products));
}

loadProducts();