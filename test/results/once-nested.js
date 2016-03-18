var pizza = { cheese: true };
if (pizza.cheese) {
    pizza.vegan = false;
    if (typeof window !== 'undefined') {
        window.postMessage('cheese alert!', 'http://www.cheese.com');
    }
}