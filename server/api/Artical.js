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
		console.log('连接失败artical');
	}else{
		console.log('连接成功artical');
	}
});
//artical路由路径
router.post('/',(req,res) => {
	console.log('这里是artical',req.body.params)
	const sql = $sql.user.show_artical.replace('address',req.body.params.address).replace('articalid',req.body.params.id);
	conn.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			res.json(result)
		}
	})
})

module.exports = router;