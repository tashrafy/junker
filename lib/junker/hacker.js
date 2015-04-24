'use strict';

var helper = require('../helper')
  , phrase = [ "If we #{verb} the #{noun}, we can get to the #{abbreviation} #{noun} through the #{adjective} #{abbreviation} #{noun}!",
               "We need to #{verb} the #{adjective} #{abbreviation} #{noun}!",
               "Try to #{verb} the #{abbreviation} #{noun}, maybe it will #{verb} the #{adjective} #{noun}!",
               "You can't #{verb} the #{noun} without #{ingverb} the #{adjective} #{abbreviation} #{noun}!",
               "Use the #{adjective} #{abbreviation} #{noun}, then you can #{verb} the #{adjective} #{noun}!",
               "The #{abbreviation} #{noun} is down, #{verb} the #{adjective} #{noun} so we can #{verb} the #{abbreviation} #{noun}!",
               "#{ingverb} the #{noun} won't do anything, we need to #{verb} the #{adjective} #{abbreviation} #{noun}!",
               "I'll #{verb} the #{adjective} #{abbreviation} #{noun}, that should #{noun} the #{abbreviation} #{noun}!"
             ];

function editPhrase(terms){
  var value
    , selected = helper.fetch(phrase)
    , matchKey = /{([^}]+)}/g;

  while(value = matchKey.exec(selected)){
    var match = new RegExp('#' + value[0], 'gi');
    selected = selected.replace(match, terms[value[1]]);
  }
  return selected;
}

module.exports = function(hacker){
  var hacker_terms = {
    'abbreviation'        : helper.fetch(hacker.abbreviation),
    'adjective'           : helper.fetch(hacker.adjective),
    'noun'                : helper.fetch(hacker.noun),
    'verb'                : helper.fetch(hacker.verb),
    'ingverb'             : helper.fetch(hacker.ingverb),
  };

  hacker_terms.say_something_smart = editPhrase(hacker_terms);

  return hacker_terms;
};
