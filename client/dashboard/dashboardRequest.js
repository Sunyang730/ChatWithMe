angular.module('ChatWithMe.dashboard', [])
  .controller('Dashboard', function($scope, $location, $window, Msg){
    $scope.userMsgs = [];
    $scope.hide = true;
    $scope.pocoin = $window.localStorage.getItem('poCoin');
   
    $scope.post = function(){
      $location.path('/post');
    };

    $scope.getUserMsg = function(){
      var userid = $window.localStorage.getItem('userId');
      Msg.getUserMsg(userid).then(function(response){
        $scope.userMsgs = response.data;
      });
    };
    $scope.showForm = function(){
      if(this.hide){
        this.hide = false;
      } else {
        this.hide = true;
      }
    };


  });