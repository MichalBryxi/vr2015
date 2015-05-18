/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' use.typekit.net connect.facebook.net maps.googleapis.com maps.gstatic.com",
      'font-src': "'self' data: use.typekit.net fonts.gstatic.com fonts.googleapis.com",
      'connect-src': "'self'",
      'img-src': "'self' www.facebook.com p.typekit.net",
      'report-uri': "'self'",
      'style-src': "'self' 'unsafe-inline' use.typekit.net fonts.googleapis.com",
      'frame-src': "s-static.ak.facebook.com static.ak.facebook.com www.facebook.com umap.openstreetmap.fr"
    },
    modulePrefix: 'vr2015',
    environment: environment,
    firebase: 'https://vr2015.firebaseio.com/',
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.googleAnalytics = {
        webPropertyId: 'UA-43732567-9'
    };
  }

  return ENV;
};
