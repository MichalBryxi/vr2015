import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    return this.store.find('runner', params.id);
  },

  setupController: function (controller, model) {
    controller.set('attrs.runner', model);
  }
});
