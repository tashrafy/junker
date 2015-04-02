'use strict';

var junker = require('../lib/junker')
  , fs     = require('fs')
  , yaml   = require('js-yaml')
  , assert = require('assert');

describe('junker node module', function () {
  var initLib;
  initLib = new junker();

  it('must initialize junker', function () {
    assert.equal('object', typeof initLib);
  });

  it('must load a yaml file', function(){
    var file = './lib/locales/en.yml'
      , data = yaml.safeLoad(fs.readFileSync(file, 'utf8'));

    assert.equal('object', typeof data);
  });

  it('must return a name obj', function(){
    var name = initLib.name();
    assert.notEqual(null, name, 'name is NULL');
    assert.notEqual(undefined, name, 'name is undefined');
  });
});


