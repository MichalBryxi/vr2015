import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('handover', params.id);
  },

  setupController: function (controller, model) {
    controller.set('attrs.handover', model);
  }
});
