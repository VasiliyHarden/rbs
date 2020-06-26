class Controller {
  constructor(model, { stockElement, cartElement, priceElement }) {
    this.stockView = new ItemListView(stockElement);
    this.cartView = new PricedItemListView(cartElement, priceElement);

    this.model = model;
    this.model.subscribe(this);

    this._subscribeToViewEvents();
    this.update();
  }

  update() {
    this.stockView.render(this.model.getItems(STOCK));
    this.cartView.render(this.model.getItems(CART), this.model.getTotalPrice(CART));
  }

  _subscribeToViewEvents() {
    this.stockView.setItemClickHandler((id) => {
      this.model.moveItem(STOCK, CART, id);
    });
    this.cartView.setItemClickHandler((id) => {
      this.model.moveItem(CART, STOCK, id);
    });
  }
}