var apiKey = require('./../.env').apiKey;
var username = require('./../js/broswer-interface.js').username;


exports.getUser = function(){
  var username =

}

exports.getRepos = function(){
  $.get('https://api.github.com/users/daneden?access_token=' + githubKey).then(function(response){
    console.log(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};
