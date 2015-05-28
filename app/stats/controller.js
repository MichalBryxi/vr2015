import Ember from 'ember';

export default Ember.Controller.extend({
  foo: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: "My Second dataset",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
  },

  bar: function () {
    var data = this.get('model').map(function(item) {
      return item.get('duration');
    });

    return {labels: this.get('handoverNames'),
    datasets: [
      {label: 'foo', data: data}
    ]};
  }.property('model'),

  handoverNames: function () {
    return this.get('handovers').map(function (item) {
      return item.get('name');
    });
  }.property('handovers'),

  handovers: Ember.computed.alias('model')
});
