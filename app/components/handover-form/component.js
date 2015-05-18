import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  actions: {
    confirm: function () {
      this.sendAction();
    }
  }
});
