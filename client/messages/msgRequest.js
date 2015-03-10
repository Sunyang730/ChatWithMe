angular.module('ChatWithMe.msgRequest', [])
  .controller('MsgRequest', function($scope, $window, Msg){
    $scope.msg = {};
    $scope.pocoin = $window.localStorage.getItem('poCoin');
    
    $scope.postMsg = function(){
      $scope.msg.userid = $window.localStorage.getItem('userId');
      Msg.post($scope.msg).then(function(data){
        $scope.msg.msg = '';
      });
    };

  
  });
