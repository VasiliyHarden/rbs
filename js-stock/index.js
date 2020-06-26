
const stockElement = document.getElementById('stock');
const cartElement = document.getElementById('cart');
const priceElement = document.getElementById('price');

const model = new Model(initialData);
const controller = new Controller(model, {
  stockElement,
  cartElement,
  priceElement
});
