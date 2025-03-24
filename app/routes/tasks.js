import Route from '@ember/routing/route';
export default Route.extend({
  model() {
    return [
      { title: "learn Ember Templates", status: "pending" },
      { title: "enderstand Helpers", status: "completed" },
      { title: "work with Link-to", status: "pending" }
    ];
  }
});
