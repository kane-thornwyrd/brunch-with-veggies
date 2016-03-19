exports.config =
  # See https://github.com/brunch/brunch/blob/master/docs/config.md for documentation.

  files:
    javascripts:
      joinTo:
        'js/app.js': /^app/
        'js/vendor.js': /^(vendor|bower_components|node_modules)/
        'test/js/test.js': /^test(\/|\\)(?!vendor)/
        'test/js/test-vendor.js': /^test(\/|\\)(?=vendor)/
      order:
        before: []

    stylesheets:
      joinTo:
        'css/app.css': /^(vendor|bower_components|app)/

    templates:
      joinTo: 'js/app.js'

  plugins:
    autoReload:
      enabled:
        js: on
        css: on
        assets: off

    imageoptimizer:
      path: 'images'
      smushit: no

    babel:
      presets: ['es2015']
      pattern: /\.js$/

  conventions:
    assets: /(assets|vendor\/assets|font)/

  npm:
    globals:
      jade: 'jade/runtime'
