angular.module('ChatWithMe.auth', ['firebase'])
.controller('AuthController', ['$scope', '$location', '$firebaseArray', function($scope, $location, $firebaseArray){
  var ref = new Firebase("https://chatwithmehr.firebaseio.com/");
  $scope.user = {};
  
  $scope.signup = function(){
    ref.createUser({
      email: $scope.user.email,
      password: $scope.user.password

    }, function(error, userData){
      if(error){
        console.log("Error creating user", error.message);
      } else {
        console.log("Successfully created user account with uid: ", userData);
      }
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
        $location.path('/signup');
      }
    });
  };
}]);

