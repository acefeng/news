//node后端主程序
const userApi = require('./api/userApi.js');
const chLocal = require('./api/chLocal.js');
const chModern = require('./api/chModern.js');
const chSport = require('./api/chSport.js');
const Artical = require('./api/Artical.js');
const login = require('./api/login.js');

const bodyParser = require('body-parser');
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(cookieParser());
(function(){
	var keys = [];
	for(var i=0;i<100000;i++){
		keys[i] = 'a_' +Math.random();
	}
	app.use(cookieSession({
		name:'sess_id',
		keys:keys,
		maxAge:20*60*1000 //20min
	}))
})()

//后端api路由
app.use('/api/admin',userApi); //localhost:8080/#/admin 上传新的新闻
app.use('/api/local',chLocal);
app.use('/api/modern',chModern);
app.use('/api/sport',chSport);
app.use('/api/artical',Artical);
app.use('/api/login',login);


app.listen(3000);
console.log('succes listen at port:3000');



