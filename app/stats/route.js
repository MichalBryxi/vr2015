import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('runner');
  },

  setupController: function (controller, model) {
    controller.set('attrs.runners', model);
  }
});
