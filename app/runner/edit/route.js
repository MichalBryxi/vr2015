import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('runner', this.paramsFor('runner').id);
  },

  setupController: function (controller, model) {
    controller.set('attrs.runner', model);
  }
});
