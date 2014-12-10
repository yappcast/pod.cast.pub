import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find("podcast");
  }

//  setupController: function(controller, model) {
//    controller.set('attrs.podcasts', model);
//  }
});
