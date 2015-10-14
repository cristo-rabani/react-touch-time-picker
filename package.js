Package.describe({
  name: 'cristo:react-touch-time-picker',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Time picker for react, design for touch screens',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cristo-rabani/react-touch-time-picker',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use(['react','jsx@0.2.1', 'momentjs:moment@2.10.6']);
  api.use(['universe:modules@0.5.0'], {weak:true});
  api.addFiles('touch-time-picker.jsx');
  api.addFiles('fix-css.css', 'client');
  api.export('CristoTouchTimePicker');
});
