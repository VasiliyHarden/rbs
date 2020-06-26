class View {
  constructor() {
    this.stockId = 'stock';
    this.cartId = 'cart';
    this.priceId = 'price';

    this.stockView = new ItemListView(this.stockId);
    this.cartView = new ItemListView(this.cartId);

    this.init();
  }

  setItemClickHandlers({ stockItemClickHandler, cartItemClickHandler }) {
    this.stockView.setItemClickHandler(stockItemClickHandler);
    this.cartView.setItemClickHandler(cartItemClickHandler);
  }

  init() {
    webix.ui({
      view: 'toolbar',
      type: 'clean',
      cols: [{
        id: this.stockParentId,
        view: "toolbar",
        padding: 20,
        rows: [{ 
          view: "template",
          autoheight: true,
          template: '<b>Stock:</b>',
          type: 'clean' 
        }, 
        this.stockView.init()
      ]}, {
        view:"toolbar",
        padding: 20,
        rows: [{ 
          view: "template",
          autoheight: true,
          template: '<b>Cart:</b>',
          type: 'clean' 
        }, 
        this.cartView.init(),
        {
          id: this.priceId,
          view: 'template',
          autoheight: true,
          autowidth: true,
          template: `Total price: $0.00`,
          type: 'clean'
        }]
      }]
    });
  }

  render(stockItems, cartItems, cartTotalPrice) {
    this.stockView.render(stockItems);
    this.cartView.render(cartItems);

    webix.ui({
      id: this.priceId,
      view: 'template',
      autoheight: true,
      template: `Total price: $${cartTotalPrice}`,
      type: 'clean'
    }, $$(this.priceId));
  }
}