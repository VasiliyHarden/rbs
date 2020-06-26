class Model {
  constructor(initialData) {
    this.data = {
      [STOCK]: initialData,
      [CART]: []
    };
    this.subscribers = [];  
  }

  subscribe(controller) {
    this.subscribers.push(controller);
  }

  getItems(storage) {
    return this.data[storage];
  }

  getTotalPrice(storage) {
    let total = 0;
    for (let item of this.data[storage]) {
      const { count, price } = item;
      total += count * price;
    }
    return total.toFixed(2);
  }

  moveItem(from, to, id) {
    const fromItem = this._getItemById(id, from);
    const toItem = this._getItemById(id, to, fromItem);
    
    fromItem.count--;
    toItem.count++;

    if (fromItem.count === 0) {
      this.data[from] = this.data[from].filter(item => item.id !== id);
    }  

    this.notifyAll();
  }

  notifyAll() {
    for (let sub of this.subscribers) {
      sub.update();
    }
  }

  _getItemById(id, storage, template = {}) {
    if (!this.data[storage].find(item => item.id === id)) {
      this.data[storage] = [{ 
        ...template, 
        count: 0 
      }, ...this.data[storage]];
    }
    return this.data[storage].find(item => item.id === id);
  }
}