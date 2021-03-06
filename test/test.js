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
    console.log('Junker.Number.hexadecimal() TEST:\n');

    var zeroCase, nanCase, emptyCase, strCase, wordCase, negCase, hexadecimal;
    hexadecimal = number.hexadecimal(3);
    console.log('number.hexadecimal(3)', hexadecimal);
    assert.equal('string', typeof hexadecimal, 'hexadecimal(3) should return a string');

    zeroCase = number.hexadecimal(0);
    console.log('number.hexadecimal(0)', zeroCase);
    assert.equal('number', typeof parseInt(zeroCase, 16), 'number.hexadecimal(0) should return a random hexadecimal');

    nanCase = number.hexadecimal(NaN, NaN);
    console.log('number.hexadecimal(NaN, NaN)', nanCase);
    assert.equal('number', typeof parseInt(nanCase, 16), 'number.hexadecimal(NaN, NaN) should return a random hexadecimal');

    emptyCase = number.hexadecimal();
    console.log('number.hexadecimal()', emptyCase);
    assert.equal('number', typeof parseInt(emptyCase, 16), 'number.hexadecimal() should return a random hexadecimal');

    strCase = number.hexadecimal('12.23', '32.23');
    console.log('number.hexadecimal("12.23", "32.23")', strCase);
    assert.equal('number', typeof parseInt(strCase, 16), 'number.hexadecimal("12.23") should return a random hexadecimal');

    negCase = number.hexadecimal('-12.23', '32.15');
    console.log('number.hexadecimal("-12.23", "32.15")', negCase);
    assert.equal('number', typeof parseInt(negCase, 16), 'number.hexadecimal("12.23") should return a random hexadecimal');

    console.log('----------\n');
  });

  it('must return a number between the two values provided', function(){
    console.log('Junker.Number.between() TEST:\n');

    var zeroCase, nanCase, emptyCase, strCase, wordCase, negCase, between;
    between = number.between(0, 1);
    console.log('number.between(0, 1)', between);
    assert.equal(true, between > 0 && between < 1, 'between(0, 1) should return a number between 0 and 1');

    zeroCase = number.between(0);
    console.log('number.between(0)', zeroCase);
    assert.equal(true, zeroCase > 1 && zeroCase < 5000, 'between(0) should return a number between 1 and 5000');

    nanCase = number.between(NaN, NaN);
    console.log('number.between(NaN, NaN)', nanCase);
    assert.equal(true, nanCase > 1 && nanCase < 5000, 'between(NaN, NaN) should return a number between 1 and 5000');

    emptyCase = number.between();
    console.log('number.between()', emptyCase);
    assert.equal(true, emptyCase > 1 && emptyCase < 5000, 'between() should return a number between 1 and 5000');

    strCase = number.between('12.23', '32.23');
    console.log('number.between("12.23", "32.23")', strCase);
    assert.equal(true, strCase >= 12.23 && strCase <= 32.23, 'between("12.23", "32.23") should return a number between 12.23 and 32.23');

    negCase = number.between('-12.23', '32.15');
    console.log('number.between("-12.23", "32.15")', negCase);
    assert.equal(true, negCase >= -12.23 && negCase < 32.15, 'between("-12.23", "32.23") should return a number between -12.23 and 32.15');

    var testCase = number.between(0, 1);
    console.log('number.between(0, 1)', testCase);
    assert.equal(true, testCase > 0 && testCase < 1, 'between("0", "1") should return a number between 0 and 1');

    testCase = number.between(1, 0);
    console.log('number.between(1, 0)', testCase);
    assert.equal(true, testCase > 0 && testCase < 1, 'between("1", "0") should return a number between 0 and 1');

    console.log('----------\n');
  });

  it('must return a positive number btwn values provided', function(){
    console.log('Junker.Number.positive() TEST:\n');

    var zeroCase, nanCase, emptyCase, strCase, wordCase, negCase, positive;
    positive = number.positive(0, 1);
    console.log('number.positive(0, 1)', positive);
    assert.equal(true, positive > 0 && positive < 1, 'positive(0, 1) should return a number positive 0 and 1');

    zeroCase = number.positive(0);
    console.log('number.positive(0)', zeroCase);
    assert.equal(true, zeroCase > 1 && zeroCase < 5000, 'positive(0) should return a number positive 1 and 5000');

    nanCase = number.positive(NaN, NaN);
    console.log('number.positive(NaN, NaN)', nanCase);
    assert.equal(true, nanCase > 1 && nanCase < 5000, 'positive(NaN, NaN) should return a number positive 1 and 5000');

    emptyCase = number.positive();
    console.log('number.positive()', emptyCase);
    assert.equal(true, emptyCase > 1 && emptyCase < 5000, 'positive() should return a number positive 1 and 5000');

    strCase = number.positive('12.23', '32.23');
    console.log('number.positive("12.23", "32.23")', strCase);
    assert.equal(true, strCase >= 12.23 && strCase < 32.23, 'positive("12.23", "32.23") should return a number positive 12.23 and 32.23');

    negCase = number.positive('-12.23', '32.15');
    console.log('number.positive("-12.23", "32.15")', negCase);
    assert.equal(true, negCase >= -12.23 && negCase < 32.15, 'positive("-12.23", "32.23") should return a number positive -12.23 and 32.15');

    var testCase = number.positive(0, 1);
    console.log('number.positive(0, 1)', testCase);
    assert.equal(true, testCase > 0 && testCase < 1, 'positive("0", "1") should return a number positive 0 and 1');

    testCase = number.positive(1, 0);
    console.log('number.positive(1, 0)', testCase);
    assert.equal(true, testCase > 0 && testCase < 1, 'positive("1", "0") should return a number positive 0 and 1');

    console.log('----------\n');
  });

  it('must return a negative number btwn values provided', function(){
    console.log('Junker.Number.negative() TEST:\n');

    var zeroCase, nanCase, emptyCase, strCase, wordCase, negCase, negative;
    negative = number.negative(0, 1);
    console.log('number.negative(0, 1)', negative);
    assert.equal(true, negative < 0, 'negative(0, 1) should return a number negative 0 and 1');

    zeroCase = number.negative(0);
    console.log('number.negative(0)', zeroCase);
    assert.equal(true, zeroCase < -1 && zeroCase > -5000, 'negative(0) should return a number negative 1 and 5000');

    nanCase = number.negative(NaN, NaN);
    console.log('number.negative(NaN, NaN)', nanCase);
    assert.equal(true, nanCase < -1 && nanCase > -5000, 'negative(NaN, NaN) should return a number negative 1 and 5000');

    emptyCase = number.negative();
    console.log('number.negative()', emptyCase);
    assert.equal(true, emptyCase < -1 && emptyCase > -5000, 'negative() should return a number negative 1 and 5000');

    strCase = number.negative('12.23', '32.23');
    console.log('number.negative("12.23", "32.23")', strCase);
    assert.equal(true, strCase <= -12.23 && strCase > -32.23, 'negative("12.23", "32.23") should return a number negative 12.23 and 32.23');

    negCase = number.negative('-12.23', '32.15');
    console.log('number.negative("-12.23", "32.15")', negCase);
    assert.equal(true, negCase < 0, 'negative("-12.23", "32.23") should return a number negative -12.23 and 32.15');

    var testCase = number.negative(0, 1);
    console.log('number.negative(0, 1)', testCase);
    assert.equal(true, testCase < 0, 'negative("0", "1") should return a number negative 0 and 1');

    testCase = number.negative(1, 0);
    console.log('number.negative(1, 0)', testCase);
    assert.equal(true, testCase < 0, 'negative("1", "0") should return a number negative 0 and 1');

    console.log('----------\n');
  });

  it('should return an address', function(){
    console.log('Junker.Address() TEST:\n');

    var address = junker.Address();
    console.log('address', address);
    assert.equal('object', typeof address, 'address should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a business obj with credit card info', function(){
    console.log('Junker.Business() TEST:\n');

    var business = junker.Business();
    console.log('business', business);
    assert.equal('object', typeof business, 'business should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a team obj with details for a team', function(){
    console.log('Junker.Team() TEST:\n');

    var team = junker.Team();
    console.log('team', team);
    assert.equal('object', typeof team, 'team should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a commerce obj with details for product, item', function(){
    console.log('Junker.Commerce() TEST:\n');

    var commerce = junker.Commerce();
    console.log('commerce', commerce);
    assert.equal('object', typeof commerce, 'commerce should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return an app obj with details for application', function(){
    console.log('Junker.App() TEST:\n');

    var app = junker.App();
    console.log('app', app);
    assert.equal('object', typeof app, 'app should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return an avatar obj with example picture', function(){
    console.log('Junker.Avatar() TEST:\n');

    var avatar = junker.Avatar;
    console.log('avatar', avatar);
    assert.equal('object', typeof avatar, 'avatar should be an object of generated fields');

    var strCase = avatar.image('asd', 'asd');
    console.log('avatar', strCase);
    assert.equal('string', typeof strCase, 'strCase should return an image url');

    console.log('----------\n');
  });

  it('should return a company obj with fields related to a company', function(){
    console.log('Junker.Company() TEST:\n');

    var company = junker.Company();
    console.log('company', company);
    assert.equal('object', typeof company, 'company should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a hacker obj with fields related to things a hacker says', function(){
    console.log('Junker.Hacker() TEST:\n');

    var hacker = junker.Hacker();
    console.log('hacker', hacker);
    assert.equal('object', typeof hacker, 'hacker should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a phone number obj with generated phone numbers', function(){
    console.log('Junker.PhoneNumber() TEST:\n');

    var phone_num = junker.PhoneNumber();
    console.log('phone_num', phone_num);
    assert.equal('object', typeof phone_num, 'phone_num should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a bitcoin obj with generated hash', function(){
    console.log('Junker.Bitcoin() TEST:\n');

    var btc = junker.Bitcoin();
    console.log('btc', btc.address('hello world'));
    // assert.equal('object', typeof btc, 'btc should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a code obj with generated fields', function(){
    console.log('Junker.Code TEST:\n');

    var code = junker.Code();
    console.log('code isbn: ', code.isbn());
    console.log('code isbn10: ', code.isbn(10));
    console.log('code ean: ', code.ean());
    console.log('code ean8: ', code.ean(8));
    // assert.equal('object', typeof code, 'code should be an object of generated fields');

    console.log('----------\n');
  });

  it('should return a date obj with generated fields', function(){
    console.log('Junker.Date TEST:\n');

    var date = junker.Date();
    console.log('date between: ', date.between(new Date().getTime() - 1116000000, new Date().getTime() + 1116000));
    // assert.equal('object', typeof date, 'date should be an object of generated fields');

    console.log('date forward: ', date.forward(40));
    console.log('----------\n');
  });
});


