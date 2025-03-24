import EmberObject from '@ember/object';
import Controller from '@ember/controller';

const Car = EmberObject.extend({
  brand: null,
  model: null,
  year: null,
  getCarDetails() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
});

export default Controller.extend({
  car: Car.create({
    brand: "Toyota",
    model: "Camry",
    year: 2024
  }),
  get CarDetails() {
    return this.car.getCarDetails();
  }
});
