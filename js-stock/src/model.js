class Model {
  constructor(initialData) {
    this.data = {
      [STOCK]: initialData,
      [CART]: {}
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
    for (let itemId in this.data[storage]) {
      const { count, price } = this.data[storage][itemId];
      total += count * price;
    }
    return total.toFixed(2);
  }

  moveItem(from, to, id) {
    if (!this.data[to][id]) {
      this.data[to][id] = { 
        ...this.data[from][id], 
        count: 0
      };
    }

    this.data[to][id].count++;
    this.data[from][id].count--;

    if (this.data[from][id].count === 0) {
      delete this.data[from][id];
    }  

    this.notifyAll();
  }

  notifyAll() {
    for (let sub of this.subscribers) {
      sub.update();
    }
  }
}