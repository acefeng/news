<template>
	<div>
		<ul class="my_ul">
			<router-link tag="li" :to="{name:'artical',params:{column:'modern'},query:{id:val.id}}" class="my_main" v-for="(val,key) in datas">
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
		return {
			datas:[]
		}
	},
	mounted:function(){
		this.$http.post('/api/modern/getAll').then((response) => {
			this.datas = response.data;
		}).catch((err)=>{
			console.log(err)
		})
	}
}
</script>
<style>
</style>