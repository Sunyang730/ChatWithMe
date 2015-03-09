var checkUser = function(){
  var username = 'admin';
  var password = 'password';
  if(username === 'admin' && password === 'password'){
    window.location = 'file:///Users/DennsYang/HackReactor/2015-02-solo/client/dashboard.html';
  }
  console.log('WRONG user');
};

var post = function(){
  window.location = 'file:///Users/DennsYang/HackReactor/2015-02-solo/client/post.html';
};