angular.module('ChatWithMe', [
  'ChatWithMe.auth',
  'ngRoute'
  ])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/signup.html',
      controller: 'AuthController'
    })
    .when('/post', {
      templateUrl: 'messages/post.html',
      controller: 'AuthController'
    })
    .otherwise({
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    });
});