export default Ember.Controller.extend({
  attrs: {},
  isSaving: false,

  actions: {
    saveRunner: function() {
      var that = this;

      that.set('isSaving', true);
      this.get('attrs.runner').save().then(function () {
        that.set('isSaving', false);
      });
    }
  }
});
