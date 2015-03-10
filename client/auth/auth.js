angular.module('ChatWithMe.auth', [])
.controller('AuthController', function($scope, $location, Auth){
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
    console.log($scope.user);
    ref.authWithPassword({
      email: $scope.user.email,
      password: $scope.user.password
    }, function(error, authdata){
      if(error){
        console.log("Login Fail", error.message);
      } else {
        console.log("AuthData ", authdata);
        $location.path('/post');
      }
    });
  };
});

