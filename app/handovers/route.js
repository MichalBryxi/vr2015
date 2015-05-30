import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('handover');
  },

  setupController: function (controller, model) {
    controller.set('attrs.handovers', model);
  }
});
