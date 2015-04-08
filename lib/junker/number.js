'use strict';

var helper = require('../helper');

//   //     def hexadecimal(digits)
//   //       hex = ""
//   //       digits.times { hex += rand(15).to_s(16) }
//   //       hex
//   //     end

//   //     def between(from = 1.00, to = 5000.00)
//   //       Fucker::Base::rand_in_range(from, to)
//   //     end

//   //     def positive(from = 1.00, to = 5000.00)
//   //       random_number = between(from, to)
//   //       greater_than_zero(random_number)
//   //     end

//   //     def negative(from = -5000.00, to = -1.00)
//   //       random_number = between(from, to)
//   //       less_than_zero(random_number)
//   //     end

//   //     private

//   //     def greater_than_zero(number)
//   //       should_be(number, :>)
//   //     end

//   //     def less_than_zero(number)
//   //       should_be(number, :<)
//   //     end

//   //     def should_be(number, method_to_compare)
//   //       if number.send(method_to_compare, 0)
//   //         number
//   //       else
//   //         number * -1
//   //       end
//   //     end
// };

var Num = Num || {};

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

Num.digit = Math.round(Math.random() * 10);

Num.decimal = function(l_digits, r_digits){
  var minFloatLength
    , DEFAULT_DECIMAL_PLACE = 2
    , MAX_DECIMAL_PLACE = 20;

  l_digits = this.number(l_digits);
  r_digits = this.number(r_digits || DEFAULT_DECIMAL_PLACE);

  minFloatLength = Math.min(r_digits.toString().length, MAX_DECIMAL_PLACE);
  return parseFloat(l_digits + '.' + r_digits).toFixed(minFloatLength);
};

module.exports = Num;
