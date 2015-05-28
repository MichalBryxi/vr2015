import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('handovers-grid');

  this.route('handovers', function () {
    this.route('new');
  });
  this.route('handover', {path: '/handover/:id'}, function () {
    this.route('edit');
  });

  this.route('runners');
  this.route('runner', {path: '/runner/:id'}, function () {
    this.route('edit');
  });

  this.route('stats', function () {
    this.route('runner', {path: '/runner/:id'});
  });

  this.route('layout/propositions', {path: 'propositions'});
  this.route('layout/photos', {path: 'photos'});
  this.route('layout/map', {path: 'map'});
});

export default Router;
