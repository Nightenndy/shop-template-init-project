let buttonsContainer = document.querySelector('.content');
let cartCounterLabel = document.querySelector('#cart-counter');
let cartCounter = 0;
let cartPrice = 0;

buttonsContainer.addEventListener('click', btnClickHandler);

let btnClickHandler = (e) => {
  let target = e.target;

  if (target.classlist.contains('item-actions__cart')) {
    cartCounterLabel.innerHTML = ++cartCounter;

    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const mockData = +target.parentElement.previousElementSibling.innerHTML.replace(
      /^\$(\d+)\s\D+(\d+).*$/gu,
      '$1.$2'
    );

    cartPrice = Math.round((cartPrice + mockData) * 100) / 100;

    let restoreHTML = target.innerHTML;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;

    buttonsContainer.removeEventListener('click', btnClickHandler);

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      buttonsContainer.addEventListener('click', btnClickHandler);
    }, 2000);
  }
};