import Ember from 'ember';

export default Ember.Controller.extend({
  heap: {},

  actions: {
    newHandover: function() {
      var newPost = this.store.createRecord('handover', this.get('heap'));
      newPost.save();
      this.set('heap', {});
      this.transitionTo('handovers');
    }
  }
});
