'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');

const api = require('./api');
const ui = require('./ui');

$('#show-company-info').on('click', function(event){
  event.preventDefault();
  api.getPeople(ui.getPeopleSuccess, ui.getPeopleFailure);
});
