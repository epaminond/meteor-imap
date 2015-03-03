Package.describe({
  name: 'epaminond:imap',
  version: '0.8.14',
  summary: 'Meteor wrapper for node-imap',
  git: 'https://github.com/epaminond/meteor-imap.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.add_files('imap.js', 'server');
  api.export("Imap");
});

Npm.depends({
  'imap': '0.8.14'
});
