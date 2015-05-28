import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},

  actions: {
    addRunner: function() {
      var data = {'first_name': 'John', 'last_name': 'Doe'},
          newRunner = this.store.createRecord('runner', data),
          self = this;

      newRunner.save().then(function () {
        self.transitionTo('runner.edit', newRunner.id);
      }, function (err) {
        console.log(err);
      });
    }
  }
});
