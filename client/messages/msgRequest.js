angular.module('ChatWithMe.msgRequest', [])
  .controller('MsgRequest', function($scope, $window, Msg){
    $scope.msg = {};
    $scope.pocoin = $window.localStorage.getItem('poCoin');
    $scope.postMsg = function(){
      $scope.msg.userid = $window.localStorage.getItem('userId');
      Msg.post($scope.msg).then(function(data){
      
      });
    };
  });


  //ToDo: 
  //- how to get the user name
  //- server is expect a object
  //- database is expecting some special field. 
  //- set $window.localstorage.whatever to username and userid
    //- need to use that username and userid to send post message databack