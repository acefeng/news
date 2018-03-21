//sql语句
var sqlMap = {
	//用户
	user:{
		//数据添加
		add: 'insert into local(id, title, promulgator, time, comment) values (0,?,?,?,?)',
		//数据查找
		show_local: 'select * from local',
		show_artical: 'select * from address where id=articalid'

	}
}
module.exports = sqlMap