'use strict';

var helper = require('../helper');

var Avatar = Avatar || {};

function getSize(size){
  if(typeof size === 'number'){ return size + 'x' + size; }
  var formatted = size.toString().indexOf('x') !== -1;
  if(formatted){ return size; }
  else{ return 'Size should be a number or a string e.g. 300x300 or 300'; }
}

Avatar.image = function(slug, size, format){
  var SUPPORTED_FORMATS = ['png', 'jpg', 'bmp'];
  slug = slug || 'sitsequiquia';
  size = getSize(size || 300);
  format = SUPPORTED_FORMATS.indexOf(format) !== -1 ? format : 'png';

  return 'http://robohash.org/' + slug + '.' + format + '?size=' + size;
};

module.exports = Avatar;
