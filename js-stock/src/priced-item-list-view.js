class PricedItemListView {
  constructor(listElement, priceElement) {
    this.itemListView = new ItemListView(listElement);
    this.priceElement = priceElement;
  }

  render(items, price) {
    this.itemListView.render(items);
    this.priceElement.textContent = `Total price: $${price}`;
  }

  setItemClickHandler(handler) {
    this.itemListView.setItemClickHandler(handler);
  }
}