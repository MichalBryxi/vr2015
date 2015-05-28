import Ember from 'ember';

export default Ember.Controller.extend({
  attrs: {},

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
    var data = this.get('attrs.handovers').map(function(item) {
      return item.get('duration');
    });
    // var teamRank = this.get('attrs.handovers').map(function(item) {
    //   return item.get('teamRank') || 81;
    // });

    return {labels: this.get('handoverNames'),
    datasets: [
      {label: 'Časy přeběhů', data: data},
      // {label: 'teamRank', data: teamRank,

      //       fillColor: "rgba(151,187,205,0.5)",
      //       strokeColor: "rgba(151,187,205,0.8)",
      //       highlightFill: "rgba(151,187,205,0.75)",
      //       highlightStroke: "rgba(151,187,205,1)",
    // }
    ]};
  }.property('model'),

  lengthGraph: function () {
    return {
      labels: this.get('handoverNames'),
      datasets: [
        {
          label: 'Délky tras', data: this.get('lengths')
        }
      ]
    };
  }.property('lengths', 'handoverNames'),

  difficultyGraph: function () {
    return {
      labels: this.get('handoverNames'),
      datasets: [
        {
          label: 'Náročnosti tras', data: this.get('difficulties')
        }
      ]
    };
  }.property('lengths', 'handoverNames'),


  ////////////////////////////////////////////////////////////////////////////////

  handoverNames: function () {
    return this.get('attrs.handovers').map(function (item) {
      if(item.get('runner')) {
        return item.get('name') + " - " + item.get('runner').get('initials');
      } else {
        return item.get('name');
      }
    });
  }.property('handovers.@each'),

  lengths: function () {
    return this.get('attrs.handovers').map(function (item) {
      return item.get('length') || 0;
    });
  }.property('handovers.@each'),

  difficulties: function () {
    return this.get('attrs.handovers').map(function (item) {
      return item.get('difficulty') || 0;
    });
  }.property('handovers.@each'),

  handovers: Ember.computed.alias('model')
});
