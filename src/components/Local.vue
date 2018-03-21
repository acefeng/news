<template>
	<div>
		
		<ul class="my_ul">
			<mt-swipe :auto="4000" class="my_swipe">
			  <mt-swipe-item></mt-swipe-item>
			  <mt-swipe-item></mt-swipe-item>
			  <mt-swipe-item></mt-swipe-item>
			</mt-swipe>
			<router-link tag="li" :to="{name:'artical',params:{column:'local'},query:{id:val.id}}" class="my_main" v-for="(val,key) in datas">
				<p class="my_p1">
		  			{{val.title}}
		  		</p>
		  		<p>
		  			<span>置顶</span>
		  			<span>{{val.promulgator}}</span>
		  			<span>评论166</span>
		  			<span>发布时间:{{val.time}}</span>
		  		</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
export default {
	data(){
		return{
			datas: []
		}
	},
	mounted:function(){
		console.log('获取local页数据');
		this.$http.post('/api/local/getAll').then((response) => {
				this.datas = response.data;
			}).catch((err) => {
				console.log(err);
			})
	}
}
</script>
<style>
	.my_p1{
		height: 32px;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.my_swipe{
		height: 200px;
		border-radius: 0px 0px 5px 5px;
		margin: 0 auto;

	}
	.mint-swipe-items-wrap>div:nth-child(1){
		background: url('https://p3.pstatp.com/list/6ec8000ebfbb019e76c8');
		background-size: 100%;

	}
	.mint-swipe-items-wrap>div:nth-child(2){
		background: url('https://p3.pstatp.com/list/405400043b822972738a');
		background-size: 100%;
	}
	.mint-swipe-items-wrap>div:nth-child(3){
		background: url('https://p3.pstatp.com/list/40580001c4c6181f9416');
		background-size: 100%;
	}
</style>