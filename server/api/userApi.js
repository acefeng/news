//数据库数据具体控制部分
var models = require('../db.js');
var mysql = require('mysql');
var $sql = require('../sqlMap.js');
var express = require('express');
var router = express.Router();

//连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect(function(err){
	if(err){
		console.log('连接失败userApi');
	}else{
		console.log('连接成功userApi');
	}
});
//管理员路由路径
router.post('/addAdmin',(req,res) => {
	const sql = $sql.user.add.replace('local',req.body.address);
	const date = [req.body.title,req.body.promulgator,req.body.time,req.body.comment];
	conn.query(sql,date,function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			console.log(result);
			res.json('成功')
		}
	})
})

module.exports = router;