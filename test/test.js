'use strict';

var chai = require('chai');
chai.Assertion.includeStack = true;
require('chai').should();
var expect = require('chai').expect;
var nodePath = require('path');

var lassoAutoprefixer = require('../'); // Load this module just to make sure it works
var lasso = require('lasso');

describe('lasso-autoprefixer' , function() {
    it('should prefix a css file', function (done) {
        var myLasso = lasso.create({
            fileWriter: {
                fingerprintsEnabled: true,
                outputDir: nodePath.join(__dirname, 'static')
            },

            plugins: [
                {
                    plugin: lassoAutoprefixer,
                }
            ]
        });

        myLasso.lassoPage({
            pageName: 'test',
            dependencies: [
                nodePath.join(__dirname, './fixtures/test.css')
            ]
        }, function (err, page) {
            if (err) return done(err);
            expect(page.getCSSUrls()).to.deep.equal(['/static/test-4ac11b8f.css'])
            done();
        });
    });
});
