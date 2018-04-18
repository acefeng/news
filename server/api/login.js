//数据库数据具体控制部分
var models = require('../db.js');
var mysql = require('mysql');
var express = require('express');
var router = express.Router();

//连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect(function(err){
	if(err){
		console.log('连接失败login');
	}else{
		console.log('连接成功login');
	}
});

router.use('/',(req,res,next) => {
	console.log(req);
	if(!req.session['admin_id']){
		console.log('没有登录');
		next();
	}else{
		console.log(req.session);
		console.log(req.cookie);
		var str = JSON.stringify({
			type:'good'
		});
		res.send(str);
	}
})

router.post('/',(req,res) => {
	console.log(11111);
	
	const username = req.body.params.username;
	const password = req.body.params.password;
	const sql = `select * from entry where username='${username}'`;
	conn.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			if(result.length==0){
				var str = JSON.stringify({
					type:'undefined',
					name:username
				});
				res.send(str).end();
			}else{
				if(password == result[0].password){
					req.session['admin_id']=result[0].id;
					console.log(req.session['admin_id']);
					var str = JSON.stringify({
						type:'good',
						name:username
					});
					res.send(str);
				}else{
					var str = JSON.stringify({
						type:'falsePassword',
						name:username
					});
					res.send(str).end();
				}
			}
			// res.json(result);
		}
	})
})



//login数据提取
// router.post('/',(req,res) => {
// 	const sql = '';
// 	conn.query(sql,function(err,result){
// 		if(err){
// 			console.log(err);
// 		}
// 		if(result){
// 			res.json(result);
// 		}
// 	})
// })

module.exports = router;