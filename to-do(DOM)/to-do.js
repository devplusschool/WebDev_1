
// Obtener referencias a los elementos del DOM
const orderForm = document.getElementById('orderForm');
const customerNameInput = document.getElementById('customerName');
const productInput = document.getElementById('product');
const quantityInput = document.getElementById('quantity');
const orderList = document.getElementById('orderList');

// Función para agregar un pedido
function addOrder(event) {
  event.preventDefault(); // Evitar el envío del formulario

  const customerName = customerNameInput.value.trim();
  const product = productInput.value.trim();
  const quantity = quantityInput.value.trim();

  if (customerName === '' || product === '' || quantity === '') {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Crear un nuevo elemento de lista para el pedido
  const li = document.createElement('li');
  li.textContent = `Cliente: ${customerName}, Producto: ${product}, Cantidad: ${quantity}`;

  // Crear un botón para eliminar el pedido
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '✖';
  deleteButton.style.marginLeft = '10px';
  deleteButton.addEventListener('click', () => {
    orderList.removeChild(li);
  });

  // Agregar el botón al elemento de lista
  li.appendChild(deleteButton);

  // Agregar el pedido a la lista
  orderList.appendChild(li);

  // Limpiar los campos del formulario
  customerNameInput.value = '';
  productInput.value = '';
  quantityInput.value = '';
}

// Agregar evento al formulario para manejar el envío
orderForm.addEventListener('submit', addOrder);
