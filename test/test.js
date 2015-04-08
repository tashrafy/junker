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
    console.log('Junker.Name() TEST:\n');
    var nameObj = junker.Name()
      , name = nameObj.name;

    console.log('name\n', nameObj);
    assert.equal('object', typeof nameObj, 'junker.Name() should return an obj');
    assert.equal('string', typeof name, 'name should be a string');
    assert.notStrictEqual(null, name, 'name is NULL');
    assert.notStrictEqual(undefined, name, 'name is undefined');

    console.log('----------\n');
  });

  var number = junker.Number;
  it('must return a number', function(){
    console.log('Junker.Number TEST:\n');
    console.log('number', number);
    assert.equal('object', typeof number, 'junker.Number should return an object');

    var zeroCase = number.number(0);
    console.log('number.number(0)', zeroCase);
    assert.equal(true, zeroCase > 0, 'number(0) should return random number of digits');

    var nanCase = number.number(NaN);
    console.log('number.number(NaN)', nanCase);
    assert.equal(true, nanCase > 0, 'number(NaN) should return random number of digits');

    var emptyCase = number.number();
    console.log('number.number()', emptyCase);
    assert.equal(true, emptyCase > 0, 'number() should return random number of digits');

    var strCase = number.number('123');
    console.log('number.number("123")', strCase);
    assert.equal(true, strCase > 0, 'number("123") should return random number of digits');

    var wordCase = number.number('hello');
    console.log('number.number("hello")', wordCase);
    assert.equal(true, wordCase > 0, 'number("hello") should return random number of digits');

    console.log('----------\n');
  });

  it('must return a decimal', function(){
    console.log('Junker.Number.decimal() TEST:\n');

    var decimal = number.decimal(4, 5);
    console.log('number.decimal(4, 5)', decimal);
    assert.equal(false, parseFloat(decimal) % 1 === 0, 'decimal(4, 5) should return a decimal');

    console.log('----------\n');
  });


});


