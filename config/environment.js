/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'cast-pub',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. "with-controller": true
      },
      server_host: process.env.SERVER_HOST
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
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

  }

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self' 'unsafe-eval' http://maxcdn.bootstrapcdn.com http://cdnjs.cloudflare.com",
    'font-src': "'self' http://fonts.gstatic.com http://maxcdn.bootstrapcdn.com",
    'connect-src': "'self' https://api.mixpanel.com " + ENV.EmberENV.server_host,
    'img-src': "'self'",  
    'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com http://maxcdn.bootstrapcdn.com",
    'media-src': "'self'"
  }

  ENV["simple-auth"] = {
      authorizer: 'simple-auth-authorizer:token',
      crossOriginWhitelist: ['http://localhost:4000']
  };

  ENV['simple-auth-token'] = {
    serverTokenEndpoint: 'http://localhost:4000/api/auth',
    identificationField: 'email',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
  };

  return ENV;
};
