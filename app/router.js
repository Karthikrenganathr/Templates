import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('q1');
  this.route('q3');
  this.route('q5');
  this.route('q4');
  this.route('q2');
});

export default Router;
