import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  this.route('handovers', function () {
    this.route('new');
  });
  this.route('handover', function () {
    this.route('edit', {path: '/edit/:id'});
  });

  this.route('runners', function () {
    this.route('new');
  });
  this.route('runner', {path: '/runner/:id'}, function () {
    this.route('edit');
  });

  this.route('stats');

  this.route('layout/propositions', {path: 'propositions'});
  this.route('layout/photos', {path: 'photos'});
  this.route('layout/map', {path: 'map'});
});

export default Router;
