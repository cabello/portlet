function reloadFixtures(handler) {
  $('#fixtures').load('fixtures/fixtures.html', handler);
}

(function (requirejs, karma) {
  var testList = Object.keys(karma.files).filter(function (file) {
    return /\.(spec|min)\.js$/.test(file);
  });

  requirejs.config({
      // Karma serves files from '/base'
      baseUrl: '/base/',

      paths: {
        'jquery.cloneEvent': 'vendor/bower_components/jquery.cloneEvent/dist/jquery.cloneEvent.min',
        Portlet: 'src',
        Bisna: 'vendor/bisna',
        Specs: 'test/specs',
        Chai: 'node_modules/chai/chai',
        Testem: '/testem'
      },

      shim: {
        'jquery.cloneEvent': {
          deps: ['jquery']
        }
      },

      deps: ['jquery']
  });

  require(testList, function(){
    karma.start();
  });

}(window.requirejs, window.__karma__));
