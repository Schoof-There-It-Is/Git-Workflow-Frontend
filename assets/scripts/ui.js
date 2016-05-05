'use strict';

const getPeopleSuccess = function(users) {
  console.log("Got those people!");
  console.log(users);
  let userTemplate = require('./templates/user-list.handlebars');
  $('#person-info').append(userTemplate({users}));
};

const getPeopleFailure = function(error) {
  console.error(error);
};

module.exports = {
  getPeopleSuccess,
  getPeopleFailure,
};
