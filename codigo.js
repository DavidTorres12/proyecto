// Función para agregar un producto al carrito
function addToCart(productId) {
    var product = document.getElementById('product' + productId);
    var productName = product.querySelector('h3').textContent;
    var productPrice = product.querySelector('p').textContent;
    
    var cartItems = document.getElementById('cartItems');
    var totalPrice = document.getElementById('totalPrice');
    
    var li = document.createElement('li');
    li.textContent = productName + ' - ' + productPrice;
    cartItems.appendChild(li);
    
    var price = parseFloat(productPrice.replace('Precio: $', ''));
    var currentTotal = parseFloat(totalPrice.textContent.replace('Total: $', ''));
    var newTotal = currentTotal + price;
    totalPrice.textContent = 'Total: $' + newTotal.toFixed(2);
  }
  