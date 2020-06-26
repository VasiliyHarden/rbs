class Controller {
  constructor(model, view) {
    this.view = view;
    this.model = model;
    this.model.subscribe(this);

    this._subscribeToViewEvents();
    this.update();
  }

  update() {
    this.view.render(
      this.model.getItems(STOCK),
      this.model.getItems(CART),
      this.model.getTotalPrice(CART)
    );
  }

  _subscribeToViewEvents() {
    this.view.setItemClickHandlers({
      stockItemClickHandler: (id) => {
        this.model.moveItem(STOCK, CART, id);
      },
      cartItemClickHandler: (id) => {
        this.model.moveItem(CART, STOCK, id);
      }
    });
  }
}