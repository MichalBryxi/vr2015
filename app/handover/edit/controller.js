import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},
  saving: false,

  actions: {
    editHandover: function() {
      var that = this;
      this.set('saving', true);

      this.get('attrs.item').save().then(function () {
        that.set('saving', false);
      });
    }
  }
});
