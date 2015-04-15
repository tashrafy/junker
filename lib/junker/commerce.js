'use strict';

var helper = require('../helper');

function getDepartments(max, fixed_amount, commerce){
  fixed_amount = fixed_amount || false;
  max = max || 3;

  var departments = []
    , itr = 0;
  for(itr; itr < max; itr++){
    departments.push(helper.fetch(commerce.department));
  }
  console.log(departments);
  return departments;
}

module.exports = function(commerce){
  return {
    'department' : getDepartments(commerce),
    'color': helper.fetch(commerce.color),
    'price': parseFloat((Math.random() * 100).toFixed(2)),
    'product_name': helper.fetch(commerce.product_name.adjective) + ' ' +
                    helper.fetch(commerce.product_name.material)  + ' ' +
                    helper.fetch(commerce.product_name.product)
  };
};
