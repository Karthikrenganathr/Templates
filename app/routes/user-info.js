import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
export default Route.extend({
  model() {
    let user = EmberObject.create({
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      location: "New York"
    });
    user.reopen({
      address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
      }
    });
    return user;
  }
});
