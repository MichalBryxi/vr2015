import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return Ember.RSVP.hash({
      handovers: this.store.find('handover'),
      runners: this.store.find('runner')
    });
  },

  setupController: function (controller, model) {
    controller.set('attrs.handovers', model.handovers);
    controller.set('attrs.runners', model.runners);
  }
});
