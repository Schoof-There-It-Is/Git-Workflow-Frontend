'use strict'

let getPeople = function(success, failure){
  $.ajax({
    url: 'http://jsonplaceholder.typicode.com/users',
  }).done(success)
  .fail(failure);
};

module.exports = {
  getPeople
};
