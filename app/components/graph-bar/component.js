import Ember from 'ember';
// import defaultTheme from '../themes/default-theme';

export default Ember.Component.extend({
  tagName: '',

  chartMode: 'StockChart', // Available options: a falsy value, 'StockChart', 'Map'.
                           // If `mode` is not provided or is a falsy value, the chart is initialized in Charts mode.
                           // If `mode` is a string, it is passed to Highcharts as the first argument.
                           // When Highcharts introduces a new mode, you will be able to use it here right away.

  chartOptions: {
    chart: {
        type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
          text: 'Fruit eaten'
      }
    }
  },

  chartData: [
    {
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }
  ],

  theme: {
      colors: [
        '#258be2',
        '#666666',
        '#f45b5b',
        '#8085e9',
        '#8d4654',
        '#7798bf',
        '#aaeeee',
        '#ff0066',
        '#eeaaee',
        '#55bf3b',
        '#df5353',
        '#7798bf',
        '#aaeeee'
      ],
      chart: {
        backgroundColor: null,
        style: {
          fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
        }
      },
      title: {
        style: {
          color: 'black',
          fontSize: '18px',
          fontWeight: 'bold'
        }
      },
      subtitle: {
        style: {
          color: 'black'
        }
      },
      tooltip: {
        borderWidth: 0,
        style: {
          fontSize: '16px'
        }
      },
      legend: {
        itemStyle: {
          fontWeight: 'bold',
          fontSize: '14px'
        }
      },
      xAxis: {
        labels: {
          style: {
            color: '#6e6e70',
            fontSize: '16px'
          }
        },
        title: {
          style: {
            fontSize: '14px'
          }
        }
      },
      yAxis: {
        labels: {
          style: {
            color: '#6e6e70',
            fontSize: '16px'
          }
        },
        title: {
          style: {
            fontSize: '14px'
          }
        }
      },
      plotOptions: {
        series: {
          shadow: true
        },
        candlestick: {
          lineColor: '#404048'
        }
      },
      navigator: {
        xAxis: {
          gridLineColor: '#D0D0D8'
        }
      },
      rangeSelector: {
        buttonTheme: {
          fill: 'white',
          stroke: '#C0C0C8',
          'stroke-width': 1,
          states: {
            select: {
              fill: '#D0D0D8'
            }
          }
        }
      },
      scrollbar: {
        trackBorderColor: '#C0C0C8'
      },
      background2: '#E0E0E8',
      global: {
        timezoneOffset: new Date().getTimezoneOffset()
      }
    },

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
    console.log(this.get('handoverNames'));
    console.log(this.get('data'));
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
});
