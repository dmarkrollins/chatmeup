Package.describe({
  name: 'chatmeup',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
    var both = ['client', 'server'];
  api.versionsFrom('1.2.1');

  api.use([
      'meteor-base',
      'ecmascript',
      'mongo',
      'blaze-html-templates',
      'mobile-experience',
      'session',
      'jquery',
      'tracker',
      'standard-minifiers',
      'es5-shim',
      'autopublish',
      'insecure'
    ]);

  var libfiles = [
        'lib/namespace.js'
  ];

  var clientfiles = [
        'client/chat_meup.html',
        'client/chat_meup.js'
    ];

    api.addFiles(libfiles, both);
    //api.addFiles(serverfiles, 'server');
    api.addFiles(clientfiles, 'client');

    api.export('Chats');

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('chatmeup');
  api.addFiles('chatmeup-tests.js');
});
