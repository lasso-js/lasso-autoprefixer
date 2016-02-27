'use strict';

var autoprefixer = require('autoprefixer');
var postcss = require('postcss');
var DEFAULT_CONFIG = {
    browsers: ['last 4 versions']
};

module.exports = function(lasso, config) {
    // use DEFAULT_CONFIG if config not present
    config = config || DEFAULT_CONFIG;

    lasso.addTransform({
        contentType: 'css',
        name: module.id,
        stream: false,
        transform: function(code) {
            var processed = postcss([autoprefixer(config)]).process(code);

            processed.warnings().forEach(function(warn) {
                process.stderr.write(warn.toString());
            });
            return processed.css;
        }
    });
};
