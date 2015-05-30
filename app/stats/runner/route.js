import Ember from 'ember';

export default Ember.Route.extend({
  counter: 0,

  model: function(params) {
    return Ember.RSVP.hash({
      handovers: this.store.find('handover'),
      runners: this.store.find('runner'),
      selectedRunner: params.id
    });
  },

  setupController: function (controller, model) {
    controller.set('attrs.handovers', model.handovers);
    controller.set('attrs.runners', model.runners);
    controller.set('selectedRunner', model.selectedRunner);
    this.set('counter', this.get('counter') + 1);
  },

  actions: {
    didTransition: function() {
      if (this.get('counter') > 1) {
        window.location.reload();
      }
    }
  }
});
