var request = require('request');
var express = require('express');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var cookie = require('cookie');

var app = express();
var webPage={
    html:''
};
/*var obj = {
    who:'abcba'	
};*/

fs.readFile('./main.html','UTF-8',function(err,data){
	if(!err){
		webPage.html=data;
		}
});
app.get('/',function(req,res,next){
	res.cookie('index',{num:78763},{maxAge: 1000000});
	res.write(webPage.html);
	
    if (req.cookies) { 
	    console.log('req.cookies exists');
	    return next(); 
	}else{   //如果存在req.cookies跳过这个middleware
    var cookies = req.headers.cookie;    //保存对象地址，提高运行效率
    req.cookies = Object.create(null);    //创建一个对象，解析后的且未使用签名的cookie保存在req.cookies中
    req.cookies = cookie.parse(cookies);    //与express中调用cookie.serialize()对应，解析cookie
    //req.cookies = JSONCookies(req.cookies);    // JSON字符序列转化为JSON对象*/
	console.log(cookies);
	console.log(req.headers.cookie);}
	//res.end();
});
app.use(cookieParser());
app.listen(8013,function(err){
	console.log('listening on port 8013');
});