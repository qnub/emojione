Package.describe({
  name: 'qnub:emojione',
  summary: 'Meteor Package of http://www.emojione.com/ set',
  version: '0.0.3',
  git: 'https://github.com/qnub/emojione.git',
  name: "qnub:emojione"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('assets/css/emojione.css', 'client');

  api.use('templating', 'client');
  api.addFiles('lib/js/emojione.js', ['client']);
  api.addFiles('qnub:emojione.js', ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('qnub:emojione');
  api.addFiles('qnub:emojione-tests.js');
});
