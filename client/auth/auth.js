angular.module('ChatWithMe.auth', [])
.controller('AuthController', function($scope, $window, $location, Auth){
  $scope.user = {};
  
  $scope.signup = function(){
    Auth.signup($scope.user)
      .then(function(data){
      })
      .catch(function(error){
        $location.path('/');
      });
  };

  $scope.signin = function(){
    Auth.signin($scope.user)
      .then(function(data){
        $window.localStorage.setItem('userId', data.data.id);
        $window.localStorage.setItem('poCoin', data.data.po_coin);
        $location.path('/dashboard');
      })
      .catch(function(error){
        $location.path('/signup');

      });
  };
});

