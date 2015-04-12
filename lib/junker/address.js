'use strict';

var helper = require('../helper');

/**
 * Generates bulding number from placeholder
 * @param  {String} build_num - placeholder to string to generate on
 *                              top of
 * @return {String}           - random bulding number
 */
function getBuildingNumber(build_num){
  return helper.bothify(helper.fetch(build_num));
}

/**
 * Fetches random zip code range for given state.
 * @param  {String} state_abbreviation - state to fetch zip code for
 * @return {String}                    - random zip code for provided
 *                                       state
 */
function getZipCode(state_abbreviation){
  // TODO: Figure out ways to fetch random zip for state
  // -not implemented in current yaml files
  state_abbreviation = state_abbreviation || '';
  if(state_abbreviation){
    var postalCode = helper.fetch(address.postcode_by_state[state_abbreviation]);
    return helper.bothify(postalCode);
  } else {
    return helper.bothify(helper.fetch(address.postcode));
  }
}

/**
 * Generates random latitude coordinates
 * @return {Number} - random latitude coordinates
 */
function getLatitude(){
  return (Math.random() * 180) - 90;
}

/**
 * Generates random longitude coordinates
 * @return {Number} - random longitude coordinates
 */
function getLongitude(){
  return (Math.random() * 360) - 180;
}

module.exports = function(address){
  var ZIP_DIGITS = 5
    , zipcode = helper.random(Math.pow(10, ZIP_DIGITS - 1), Math.pow(10, ZIP_DIGITS));

  return {
    'city'              : helper.interpolate(address.city, address),
    'street_name'       : helper.interpolate(address.street_name, address),
    'secondary_address' : helper.numerify(helper.fetch(address.secondary_address)),
    'building_number'   : getBuildingNumber(address.building_number),
    'street_suffix'     : helper.fetch(address.street_suffix),
    'city_suffix'       : helper.fetch(address.city_suffix),
    'city_prefix'       : helper.fetch(address.city_prefix),
    'state_abbr'        : helper.fetch(address.state_abbr),
    'state'             : helper.fetch(address.state),
    'country'           : helper.fetch(address.country),
    'country_code'      : helper.fetch(address.country_code),
    'time_zone'         : helper.fetch(address.time_zone),
    'zip_code'          : zipcode,
    'zip'               : zipcode,
    'postcode'          : zipcode,
    'latitude'          : getLatitude(),
    'longitude'         : getLongitude()
  }
};
