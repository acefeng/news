<template>
	<div>
		<table>
			<tr>
				<td>填写目标地址</td>
				<td><input type="text" v-model="address"></td>
			</tr>
			<tr>
				<td>题目:</td>
				<td><input type="text" v-model="title"></td>
			</tr>
			<tr>
				<td>上传者: </td>
				<td><input type="text" v-model="promulgator"></td>
			</tr>
			<tr>
				<td>具体内容:</td>
				<td><textarea v-model="comment"></textarea></td>
			</tr>
			<tr>
				<td><button @click="my_subline">提交</button></td>
			</tr>
		</table>
	</div>
</template>
<script>
import changeDate from './instrument/index.js'
export default{
	data(){
		return{
			title:'',
			promulgator:'',
			comment:'',
			address:''
		}
	},
	methods:{
		my_subline(){
			const now = new Date();
			var chDate = changeDate.changeDate(now.getTime());
			this.$http.post('/api/admin/addAdmin',{
				address:this.address,
				title: this.title,
				promulgator: this.promulgator,
				comment: this.comment,
				time: chDate
			}).then((response) => {
				console.log(response);
			}).catch((err) => {
				console.log(err);
			})
			this.title="";
			this.promulgator="";
			this.comment="";
		}
	}
}
</script>
<style scoped>
	input{
		border:1px solid #333;
	  	height:22px;
	  	line-height:44px;
	}
	textarea{
		border: 1px solid black;
	}
	button{
		border: 1px solid black;
	}
</style>