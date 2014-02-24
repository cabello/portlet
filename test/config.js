// Karma configuration
// Generated on Mon Feb 24 2014 16:07:24 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    basePath: '../',

    // frameworks to use
    frameworks: ['requirejs', 'mocha', 'chai'],

    client: {
      mocha: {
        ui: 'tdd'
      }
    },

    // list of files / patterns to load in the browser
    files: [
        'vendor/bower_components/jquery/dist/jquery.js',

        {pattern: 'test/specs/*spec.js', included: false},
        {pattern: 'test/fixtures/*.js', included: false},
        {pattern: 'src/**/*.js', included: false},
        {pattern: 'vendor/bisna/*.js', included: false},
        {pattern: 'vendor/bower_components/jquery.cloneEvent/dist/*.js', included: false},
        'test/main.js'
    ],

    // list of files to exclude
    exclude: [

    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS', 'Firefox'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
