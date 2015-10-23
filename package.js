Package.describe({
  name: 'qnub:emojione',
  summary: 'Meteor Package of http://www.emojione.com/ set',
  version: '1.5.1',
  git: 'https://github.com/qnub/emojione.git',
  name: "qnub:emojione"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('assets/css/emojione.css', 'client');

  api.use('templating', 'client', {weak: true});

  api.addFiles('lib/js/emojione.js');
  api.addFiles('lib/meteor/emojione-client.js', 'client');
});
