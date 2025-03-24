import EmberObject, { computed } from '@ember/object';
import Controller from '@ember/controller';

const Product = EmberObject.extend({
  originalPrice: 100,
  discountedPrice: computed('originalPrice', function () {
    return this.originalPrice * 0.9; 
  })
});

export default Controller.extend({
  product: Product.create(),
  actions: {
    updatePrice(event) {
      let newPrice = parseFloat(event.target.value);
      if (!isNaN(newPrice) && newPrice > -1) {
        this.set('product.originalPrice', newPrice);
      }
      else{
        alert("invalid number");
      }
    }
  }
});
