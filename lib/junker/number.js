'use strict';

var helper = require('../helper');

// module.exports = function(t){
//   console.log(t);
//   // def number(digits)
//   //       (1..digits).collect {digit}.join
//   //     end

//   //     def decimal(l_digits, r_digits = 2)
//   //       l_d = self.number(l_digits)
//   //       r_d = self.number(r_digits)
//   //       "#{l_d}.#{r_d}"
//   //     end

//   //     def digit
//   //       (rand() * 9).round.to_s
//   //     end

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



Num.number = function(digits){
  return helper.random(Math.pow(10, digits - 1), Math.pow(10, digits));
};

Num.digit = Math.round(Math.random() * 10);

Num.decimal = function(l_digits, r_digits){
  l_digits = helper.random(Math.pow(10, l_digits - 1), Math.pow(10, l_digits));
  r_digits = helper.random(Math.pow(10, r_digits - 1), Math.pow(10, r_digits));

  console.log('decimal', l_digits + '.' + r_digits);
};

module.exports = Num;
