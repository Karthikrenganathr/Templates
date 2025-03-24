import Controller from '@ember/controller';
import { computed,set } from '@ember/object';
export default Controller.extend({
   incompleteTasks: computed('model.@each.status', function () {
    return this.model.filter(task => task.status === 'pending');
  }),
  actions: {
    toggleStatus(task) {
      set(task, 'status', task.status === 'pending' ? 'completed' : 'pending');
    }
  }
});
