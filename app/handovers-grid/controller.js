import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},
  isSaving: false,

  actions: {
    editHandover: function() {
      var self = this;
      this.set('isSaving', true);

      this.get('attrs.handovers').save().then(function () {
        self.set('isSaving', false);
      });
    }
  }
});
