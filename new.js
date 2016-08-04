var request = require('request');
var j = request.jar(); //開新餅乾罐
var p = 'http://sitcon-karaage.shouko.tw/';

request.post({
  url: p + 'login.php',
  form: {
    'user': 'user', 'pass': '12345'
  },
  jar: j
}, function(err, res, body) {
  if(!err) {
    request.get({
      url: p + 'secret.php',
      jar: j
    }, function(err, res, body) {
      console.log(body);
    });
  }
});