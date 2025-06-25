

const {resetProducts, addProduct, getProducts, removeProduct} = require('./product')


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
  it('should remove a product', () => {
    addProduct('Melon', 4);
    const [product] = getProducts();
    removeProduct(product.id);
    expect(getProducts()).toHaveLength(0)
  });
  it('should throw if product does not exist', () => {
    expect(() => removeProduct(999)).toThrow();
  });
});