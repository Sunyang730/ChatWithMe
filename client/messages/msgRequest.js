angular.module('ChatWithMe.msgRequest', [])
  .controller('MsgRequest', function($scope, Msg){

    $scope.postMsg = function(){
      Msg.post($scope.msg).then(function(data){
        console.log(data);
      });
    };
  });


  //ToDo: 
  //- how to get the user name
  //- server is expect a object
  //- database is expecting some special field. 
  //- set $window.localstorage.whatever to username and userid
    //- need to use that username and userid to send post message databack