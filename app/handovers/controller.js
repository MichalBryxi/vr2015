import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},

  handoversSorted: function () {
    return this.get('attrs.handovers').sortBy('order');
  }.property('attrs.handovers')
});
