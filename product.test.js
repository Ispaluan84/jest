/*
const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');
- addProduct
  - debería agregar un producto.
  - debería incrementar el id en 1 cada vez que se añada un producto.
  - debería lanzar un error si el nombre o el precio no están definidos.
  - debería lanzar un error si el producto ya existe.
- removeProduct
  - debería eliminar un producto
  - debería lanzar un error si el producto no existe.
- getProduct
  - debería devolver un producto por su id.
  - debería lanzar un error si el producto no existe.
- updateProduct
  - debería actualizar un producto por su id.
  - debería lanzar un error si el producto no existe.

  Adding Products
    ✓ should add a product (3 ms)
    ✓ should fail when adding a repeated product (8 ms)
    ✓ should fail when adding a product with no name (1 ms)
    ✓ should fail when adding a product with no price (1 ms)
  Removing Products
    ✓ should remove a product (1 ms)
  Getting a single product
    ✓ should get a product (1 ms)
  Updating Products
    ✓ should update a product
    ✓ should fail when updating a product that does not exist (1 ms)
    ✓ should only update the price
    ✓ should only update the name

*/

const {resetProducts, addProduct, getProducts} = require('./product')


beforeEach(() => {
    resetProducts();
});


describe('Adding Products', () => {
    it('should add a product', () => {
        expect(() => addProduct('manzana', 1)).not.toThrow();
        expect(getProducts()).toEqual([{id:0, name: 'manzana', price: 1}])
        addProduct('kiwi', 3);
        expect(getProducts()).toEqual([{id:0, name: 'manzana', price: 1},{id:1, name: 'kiwi', price: 3}])
    })
    it('should fail when adding a product with no name', () => {
      expect(() => addProduct(null, 3)).toThrow('Datos incorrectos')
    })
    it('should fail when adding a product with no price', () => {
      expect(() => addProduct('kiwi', null)).toThrow('Datos incorrectos')
    })
    it('should fail when adding a repeated product', () => {
      addProduct('pomelo', 2);
      expect(() => addProduct('pomelo', 1)).toThrow()
    })
});

describe('removing product',() => {
  it('should remove a product')
})