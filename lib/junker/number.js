'use strict';

var helper = require('../helper')
  , Num = Num || {};

function getNumberByDigits(digits){
  return Math.floor(Math.pow(10, digits));
}

/**
 * Generate a random number based on the number of digits passed in.
 * Not specifying the number of digits will generate
 * a random number of random digits.
 * @param  {Number} digits - the number of digits to generate
 * @return {Number}        - random number with the number of digits
 *                           passed in
 */
Num.number = function(digits){
  var randomNumber
    , negative = digits < 0;
  digits = parseInt(digits) || 0;
  if(digits === 0){ digits = this.digit + 1; }
  else if(digits < 0){ digits = -digits;  }

  randomNumber = helper.random(getNumberByDigits(digits - 1), getNumberByDigits(digits));

  return negative ? randomNumber * -1 : randomNumber;
};

/**
 * Generates a random single digit number between 0 - 10
 * @type {Number}
 */
Num.digit = Math.round(Math.random() * 10);

/**
 * Generate a random decimal based on the provided digits for the
 * left and right of the '.'.
 * @param  {Number} l_digits - the number of digits to the left of '.'
 * @param  {Number} r_digits - the number of digits to the right of
 *                             '.'
 * @return {Number}          - random decimal value with the number
 *                             of digits provided for left and right
 *                             side of the decimal
 */
Num.decimal = function(l_digits, r_digits){
  var minFloatLength
    , DEFAULT_DECIMAL_PLACE = 2
    , MAX_DECIMAL_PLACE = 20;

  l_digits = this.number(l_digits);
  r_digits = this.number(r_digits || DEFAULT_DECIMAL_PLACE);

  minFloatLength = Math.min(r_digits.toString().length, MAX_DECIMAL_PLACE);
  return parseFloat(l_digits + '.' + r_digits).toFixed(minFloatLength);
};

/**
 * Generates a random hexadecimal string based on number of digits
 * specified.
 * @param  {Number} digits - number of characters for hex string
 * @return {String}        - random hexadecimal string
 */
Num.hexadecimal = function(digits){
  var hex = ''
    , HEX_CHAR_MAX = 15
    , BASE_16 = 16
    , itr = 0;
  digits = Math.max(parseInt(digits), 0) || this.digit;

  while(itr < digits){
    hex += (helper.random(0, HEX_CHAR_MAX)).toString(BASE_16); itr++;
  }

  return hex;
};

/**
 * Return a random number between two numbers.
 * @param  {Number} from - least number
 * @param  {Number} to   - largest number
 * @return {Number}      - number between the least and largest
 *                         values provided
 */
Num.between = function(from, to){
  var MIN = 1, MAX = 5000
  from = !isNaN(from) ? parseFloat(from) : MIN;
  to = !isNaN(to) ? parseFloat(to) : MAX;
  if(from === to){ from = MIN; to = MAX; }
  return helper.random(from, to);
};

/**
 * Return a positive random number between two numbers.
 * @param  {Number} from - least number
 * @param  {Number} to   - largest number
 * @return {Number}      - number between the least and largest
 *                         values provided
 */
Num.positive = function(from, to){
  var number = Num.between(from, to);
  return number < 0 ? -number : number;
};

/**
 * Return a negative random number between two numbers.
 * @param  {Number} from - least number
 * @param  {Number} to   - largest number
 * @return {Number}      - number between the least and largest
 *                         values provided
 */
Num.negative = function(from, to){
  var number = Num.between(from, to);
  return number > 0 ? -number : number;
};

module.exports = Num;
