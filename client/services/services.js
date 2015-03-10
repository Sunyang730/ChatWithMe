angular.module('ChatWithMe.services', [])
.factory('Msg', function($http){
  var post = function(msg){
    return $http({
      method: 'POST',
      url: '/api/msg/post',
      data: msg
    })
    .then(function(resp){
      return resp;
    });
  };
  return {
    post: post

  };  
})

.factory('Auth', function ($http, $location, $window) {
  
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp;
    });
  };


  return {
    signin: signin,
    signup: signup,
  };
});
