angular.module('ChatWithMe.dashboard', [])
  .controller('Dashboard', function($scope, $location, $window, Msg){

    $scope.post = function(){
      $location.path('/post');
    };

    $scope.getUserMsg = function(){
      var userid = $window.localStorage.getItem('userId');
      Msg.getUserMsg(userid).then(function(response){
      });
    };


  });