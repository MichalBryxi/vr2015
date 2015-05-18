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

  this.route('layout/propositions', {path: 'propositions'});
  this.route('layout/photos', {path: 'photos'});
  this.route('layout/team', {path: 'team'});
  this.route('layout/map', {path: 'map'});
});

export default Router;
