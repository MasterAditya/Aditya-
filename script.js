const searchInput = document.getElementById('search');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('keyup', (event) => {
    const searchTerm = event.target.value.toLowerCase();

    products.forEach((product) => {
        const productName = product.querySelector('h3').textContent.toLowerCase();

        if (productName.includes(searchTerm)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});
function loadProducts(searchTerm) {
    $.ajax({
      url: "/products/search",
      data: { search: searchTerm },
      success: function (data) {
        var products = JSON.parse(data);
        var productHTML = "";
        for (var i = 0; i < products.length; i++) {
          productHTML += "<div class='product'>";
          productHTML += "<img src='" + products[i].imageUrl + "' alt='" + products[i].name + "' />";
          productHTML += "<h3>" + products[i].name + "</h3>";
          productHTML += "<p>" + products[i].description + "</p>";
          productHTML += "<span class='price'>$" + products[i].price + "</span>";
          productHTML += "<button data-product-id='" + products[i].id + "'>Add to Cart</button>";
          productHTML += "</div>";
        }
        $("#products").html(productHTML);
      }
    });
  }
  