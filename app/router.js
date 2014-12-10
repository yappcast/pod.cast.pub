import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("podcasts", function() {
    this.route("new");
    this.route("show", { path: "/:id" });
  });
  this.route('sessions', function(){
    this.route('new');
  });
});

export default Router;
