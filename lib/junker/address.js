'use strict';

var helper = require('../helper');

function getBuildingNumber(build_num){
  return helper.bothify(helper.fetch(build_num));
}

module.exports = function(address){
  return {
    'city': helper.interpolate(address.city, address),
    'street_name': helper.interpolate(address.street_name, address),
    'building_number': getBuildingNumber(address.building_number),
    'street_suffix': helper.fetch(address.street_suffix),
    'city_suffix':   helper.fetch(address.city_suffix),
    'city_prefix':   helper.fetch(address.city_prefix),
    'state_abbr':    helper.fetch(address.state_abbr),
    'state':         helper.fetch(address.state),
    'country':       helper.fetch(address.country),
    'country_code':  helper.fetch(address.country_code),
    'time_zone': helper.fetch(address.time_zone),

  }
};
