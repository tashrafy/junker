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

    var zeroCase, nanCase, emptyCase, strCase, wordCase, testCase, negCase;
    console.log('number', number);
    assert.equal('object', typeof number, 'junker.Number should return an object');

    zeroCase = number.number(0);
    console.log('number.number(0)', zeroCase);
    assert.equal(true, zeroCase > 0, 'number(0) should return random number of digits');

    testCase = number.number(5);
    console.log('number.number(5)', testCase);
    assert.equal(5, testCase.toString().length, 'number(5) should return random number of 5 digits');

    negCase = number.number(-5);
    console.log('number.number(-5)', negCase);
    assert.equal(true, (negCase * -1).toString().length === 5 && negCase < 0, 'number(-5) should return random number of 5 digits and be < 0');

    nanCase = number.number(NaN);
    console.log('number.number(NaN)', nanCase);
    assert.equal(true, nanCase > 0, 'number(NaN) should return random number of digits');

    emptyCase = number.number();
    console.log('number.number()', emptyCase);
    assert.equal(true, emptyCase > 0, 'number() should return random number of digits');

    strCase = number.number('123');
    console.log('number.number("123")', strCase);
    assert.equal(true, strCase > 0, 'number("123") should return random number of digits');

    wordCase = number.number('hello');
    console.log('number.number("hello")', wordCase);
    assert.equal(true, wordCase > 0, 'number("hello") should return random number of digits');

    console.log('----------\n');
  });

  it('must return a decimal', function(){
    console.log('Junker.Number.decimal() TEST:\n');

    var zeroCase, nanCase, emptyCase, strCase, wordCase, negCase, decimal;
    decimal = number.decimal(4, 5);
    console.log('number.decimal(4, 5)', decimal);
    assert.equal(false, decimal % 1 === 0, 'decimal(4, 5) should return a decimal');
    assert.equal(4, decimal.toString().split('.').shift().length, 'decimal(4, 5) should have 4 digits on left side');
    assert.equal(5, decimal.toString().split('.').pop().length, 'decimal(4, 5) should have 5 digits on right side');

    zeroCase = number.decimal(0);
    console.log('number.decimal(0)', zeroCase);
    assert.equal(true, zeroCase % 1 !== 0, 'number.decimal(0) should return a random decimal');

    nanCase = number.decimal(NaN, NaN);
    console.log('number.decimal(NaN, NaN)', nanCase);
    assert.equal(true, nanCase % 1 !== 0, 'number.decimal(NaN, NaN) should return a random decimal');

    emptyCase = number.decimal();
    console.log('number.decimal()', emptyCase);
    assert.equal(true, emptyCase % 1 !== 0, 'number.decimal() should return a random decimal');

    strCase = number.decimal('12.23', '32.23');
    console.log('number.decimal("12.23", "32.23")', strCase);
    assert.equal(true, strCase % 1 !== 0, 'number.decimal("12.23") should return a random decimal');

    negCase = number.decimal('-12.23', '32.15');
    console.log('number.decimal("-12.23", "32.15")', negCase);
    assert.equal(true, negCase % 1 !== 0, 'number.decimal("12.23") should return a random decimal');

    console.log('----------\n');
  });

  it('must return a hexadecimal', function(){
    console.log('Junker.Number.hexdecimal() TEST:\n');

    var zeroCase, nanCase, emptyCase, strCase, wordCase, negCase, hexdecimal;
    hexdecimal = number.hexadecimal();
    console.log('number.hexadecimal()', hexdecimal);
    // assert.equal(false, decimal % 1 === 0, 'decimal(4, 5) should return a decimal');

    // zeroCase = number.decimal(0);
    // console.log('number.decimal(0)', zeroCase);
    // assert.equal(true, zeroCase % 1 !== 0, 'number.decimal(0) should return a random decimal');

    // nanCase = number.decimal(NaN, NaN);
    // console.log('number.decimal(NaN, NaN)', nanCase);
    // assert.equal(true, nanCase % 1 !== 0, 'number.decimal(NaN, NaN) should return a random decimal');

    // emptyCase = number.decimal();
    // console.log('number.decimal()', emptyCase);
    // assert.equal(true, emptyCase % 1 !== 0, 'number.decimal() should return a random decimal');

    // strCase = number.decimal('12.23', '32.23');
    // console.log('number.decimal("12.23", "32.23")', strCase);
    // assert.equal(true, strCase % 1 !== 0, 'number.decimal("12.23") should return a random decimal');

    // negCase = number.decimal('-12.23', '32.15');
    // console.log('number.decimal("-12.23", "32.15")', negCase);
    // assert.equal(true, negCase % 1 !== 0, 'number.decimal("12.23") should return a random decimal');

    console.log('----------\n');
  });

});


