angular.module('ChatWithMe.dashboard', [])
  .controller('Dashboard', function($scope, $location){

    $scope.post = function(){
      $location.path('/post');
    };
  });