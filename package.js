/* eslint-disable */
Package.describe({
  name: 'ecarlotti:office365-oauth',
  version: '0.2.1',
  summary: 'Microsoft Office 365 OAuth flow',
  git: 'https://github.com/ecarlotti/meteor-office365-oauth.git',
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');

  api.use('ecmascript');
  api.use('oauth2@1.3.1', ['client', 'server']);
  api.use('oauth@2.0.0', ['client', 'server']);
  api.use('http@2.0.0', 'server');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('office365_client.js', 'client');
  api.addFiles('office365_server.js', 'server');

  api.export('Office365');
});
