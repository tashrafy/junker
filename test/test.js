'use strict';

var Junker = require('../lib/junker')
  , fs     = require('fs')
  , yaml   = require('js-yaml')
  , assert = require('assert');

describe('junker node module', function () {
  var junker;
  junker = new Junker();

  it('must initialize junker', function () {
    assert.equal('object', typeof junker);
  });

  it('must load a yaml file', function(){
    var file = './lib/locales/en.yml'
      , data = yaml.safeLoad(fs.readFileSync(file, 'utf8'));

    assert.equal('object', typeof data);
  });

  it('must return a name obj', function(){
    var nameObj = junker.Name()
      , name = nameObj.name;

    assert.equal('object', typeof nameObj, 'junker.Name() should return an obj');
    assert.equal('string', typeof name, 'name should be a string');
    assert.notStrictEqual(null, name, 'name is NULL');
    assert.notStrictEqual(undefined, name, 'name is undefined');
  });

  it('must return a number obj', function(){
    var numObj = junker.Number;
      // , num = numObj.number(1);
      console.log(numObj.number(10));
      console.log(numObj.decimal(4, 5));
      // console.log(num);
    // assert.equal('object', typeof nameObj, 'junker.Name() should return an obj');
    // assert.equal('string', typeof name, 'name should be a string');
    // assert.notStrictEqual(null, name, 'name is NULL');
    // assert.notStrictEqual(undefined, name, 'name is undefined');
  });
});


