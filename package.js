Package.describe({
  name: 'iwazaru:synth',
  version: '0.1.0',
  summary: 'A library to generate sounds with the WebAudio API',
  git: 'https://github.com/iwazaru/meteor-synth',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('ecmascript');
  api.addFiles('wad.js', 'client');
  api.export('Wad', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('iwazaru:synth');
  api.addFiles('synth-tests.js');
});
