const createSpanElement = (text) => {
  const el = document.createElement('span');
  el.textContent = text;
  return el;
}

const createItemElement = ({ title, count, price }) => {
  const itemElem = document.createElement('div');
  itemElem.classList.add('item');
  const itemInfoElem = document.createElement('div');
  itemInfoElem.classList.add('item__info');
  
  itemElem.append(createSpanElement(title));
  itemElem.append(itemInfoElem);

  itemInfoElem.append(createSpanElement(count));
  itemInfoElem.append(createSpanElement(`$${price.toFixed(2)}`));
  return itemElem;
}