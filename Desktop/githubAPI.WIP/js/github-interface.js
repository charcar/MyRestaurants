var apiKey = require('./../.env').apiKey;
var username = require('./../js/broswer-interface.js').username;


exports.getUser = function(){
  var searchUser = $('#search').val();

}

exports.getRepos = function(){
  var searchUser = $('#search').val();
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
