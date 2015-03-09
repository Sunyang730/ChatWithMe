$(function(){
  //storage of messages
  var messages =[];

  //random message generator
  var msgGenerator = function(){
    for(var i = 0; i < 8; i++){
      var message = {
        userid: '00'+ (i * 15),
        username: 'whatever' + i,
        message: 'random message' + i
      };
      messages.push(message);
    }
  }();


  //validate user

  var checkUser = function(){
    var username = 'admin';
    var password = 'password';
    if(username === 'admin' && password === 'password'){
      window.location = 'file:///Users/DennsYang/HackReactor/2015-02-solo/client/dashboard.html';
    }
    console.log('WRONG user');
  };

  //redirect user to post page

  var post = function(){
    window.location = 'file:///Users/DennsYang/HackReactor/2015-02-solo/client/post.html';
  };


  //post message

  var postMsg = function(msg){
    var message = {
      userid: '001',
      username: 'admin',
      message: msg
    };
    messages.push(message);
  };

  $('.send').on('click', function(){
    var msg = $('.inputBox').val();
    postMsg(msg);
  });


});