class ItemListView {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.itemClickHandler = null;
    this._onItemClick = this._onItemClick.bind(this);
  }

  render(items) {
    this._clearParent();
    for (let id in items) {
      const itemElement = createItemElement(items[id]);
      itemElement.addEventListener('click', () => this._onItemClick(id));
      this.parentElement.append(itemElement);
    }
  }

  setItemClickHandler(handler) {
    this.itemClickHandler = handler;
  }

  _onItemClick(id) {
    if (this.itemClickHandler) {
      this.itemClickHandler(id);
    }
  }

  _clearParent() {
    while (this.parentElement.firstChild) {
      this.parentElement.removeChild(this.parentElement.lastChild);
    }
  }
}