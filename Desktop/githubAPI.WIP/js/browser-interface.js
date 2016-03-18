var getRepos = require.('./../js/github.js').getRepos;
var githubKey = require('./../.env').githubKey;
// exports.username = user;

$(document).ready(function() {
  $('#search').click(function() {
    var user = $('#username').val();
    $('#usernameRepos').val("");


  });
});
