import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.RSVP.hash({
      handover: this.store.find('handover', this.paramsFor('handover').id),
      runners: this.store.find('runner')
    });
  },

  setupController: function (controller, model) {
    controller.set('attrs.handover', model.handover);
    controller.set('attrs.runners', model.runners);
  }
});
