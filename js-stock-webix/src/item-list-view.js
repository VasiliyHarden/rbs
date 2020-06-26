class ItemListView {
  constructor(viewId) {
    this.viewId = viewId;
    this.itemClickHandler = null;
    this._onItemClick = this._onItemClick.bind(this);
  }

  init() {
    return {
      id: this.viewId,
      view: 'datatable',
      autoConfig: true,
      height: 400,
      select: false,
      scroll: 'auto',
      data: [],
      columns:[
        { id: 'title', header: "Title", fillspace: 1 },
        { id: 'count', header: "Count" },
        { id: 'price', header: "Price", format: value => `$${value.toFixed(2)}` },
      ],
      on: {
        onItemClick: this._onItemClick
      }
    };    
  }

  render(items) {
    $$(this.viewId).clearAll();
    $$(this.viewId).parse(items);
  }

  setItemClickHandler(handler) {
    this.itemClickHandler = handler;
  }

  _onItemClick({ row }) {
    if (this.itemClickHandler) {
      this.itemClickHandler(row);
    }
  }
}