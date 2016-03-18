var pizza = {
  cheese: true
};

if (pizza.cheese) {
  pizza.vegan = false;
  window.postMessage('cheese alert!', 'http://www.cheese.com');
}
