import Ember from 'ember';

export default Ember.Component.extend({
  tagName: '',

  handoverNames: function () {
    return this.get('filteredHandovers').map(function (item) {
      if(item.get('runner')) {
        return item.get('name') + " - " + item.get('runner').get('initials');
      } else {
        return item.get('name');
      }
    });
  }.property('selectedRunner'),

  filteredHandovers: function () {
    var runner = this.get('selectedRunner'),
        handovers = this.get('handovers');

    if (runner === null) {
      return handovers;
    } else {
      return handovers.filterBy('runner.id', runner);
    }
  }.property('handovers', 'selectedRunner'),

  data: function () {
    var key = this.get('key');

    return this.get('filteredHandovers').map(function (item) {
      return item.get(key) || 0;
    });
  }.property('filteredHandovers', 'key'),

  graph: function () {
    return {
      labels: this.get('handoverNames'),
      datasets: [{
        fillColor: "rgba(62, 190, 232, 0.53)",
        strokeColor: "#2EAED8",
        label: this.get('label'),
        data: this.get('data')
      }]
    };
  }.property('handoverNames', 'label', 'data'),

  chartist: function () {
    var data = {
      chartData: {
        labels: this.get('handoverNames'),
        series: [
          this.get('data')
        ]
      }
    };
    return data;
  }.property('handoverNames', 'label', 'data')
});
