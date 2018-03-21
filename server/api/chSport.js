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
		console.log('连接失败chSport');
	}else{
		console.log('连接成功chSport');
	}
});
//sport数据提取
router.post('/getAll',(req,res) => {
	const sql = $sql.user.show_local.replace('local','sport');
	conn.query(sql,function(err,result){
		if(err){
			console.log(err);
		}
		if(result){
			res.json(result);
		}
	})
})

module.exports = router;