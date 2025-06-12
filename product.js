let products = [];
let id = 0;

function resetProducts() {
    products = [];
    id = 0;
}

function getProducts() {
    return products

}

function addProduct(name, price) {
    if(!name || !price) {
        throw new Error('Datos incorrectos')
    }
    if(products.find(product => product.name === name)) {
        throw new Error('El producto existe');
    }
  const product = {name, price, id: id++}
  products.push(product)
}

addProduct('manzana', 1)
console.log(products)


module.exports = {
    resetProducts,
    addProduct,
    getProducts,
}