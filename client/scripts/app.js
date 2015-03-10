angular.module('ChatWithMe', [
  'ChatWithMe.services',
  'ChatWithMe.auth',
  'ChatWithMe.msgRequest',
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
      controller: 'MsgRequest'
    })
    .when('/dashboard', {
      templateUrl: 'dashboard/dashboard/html',
      controller: 'Dashboard'
    })
    .otherwise({
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    });
});