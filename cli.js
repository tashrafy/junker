#!/usr/bin/env node
'use strict';
var meow = require('meow');
var junker = require('./');

var cli = meow({
  help: [
    'Usage',
    '  junker <input>',
    '',
    'Example',
    '  junker Unicorn'
  ].join('\n')
});

junker(cli.input[0]);
