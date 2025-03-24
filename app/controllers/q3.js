import EmberObject, { observer } from '@ember/object';
import Controller from '@ember/controller';

const User = EmberObject.extend({
  isPremiumUser: false,
  premiumStatusChanged: observer('isPremiumUser', function () {
    alert('User premium status changed');
  })
});

export default Controller.extend({
  user: User.create(),

  actions: {
    togglePremiumStatus() {
      this.user.set('isPremiumUser', !this.user.isPremiumUser);
    }
  }
});
