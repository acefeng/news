<template>
	<div>
		<mt-header title="">
	  		<router-link to="/" slot="left">
	    		<mt-button icon="back">返回</mt-button>
	  		</router-link>
		</mt-header>
		<div class="my_aMain">
			<h2>
				{{data.title}}
			</h2>
			<div class="my_font">
				<span>{{data.promulgator}}</span>
				<span>{{data.time}}</span>
			</div>			
			<article v-html="data.comment">
				
			</article>
			
		</div>
		
	</div>
	
</template>
<script>
export default {
	data(){
		return{
			data:[]
		}
	},
	mounted:function(){
		this.$http.post('/api/artical',{params:{id:this.$route.query.id,address:this.$route.params.column}}).then((response) => {
			this.data = response.data[0];
		}).catch((err) => {
			console.log(err);
		})
	}
}
</script>
<style scoped>
	.my_arhead{
		z-index: 1;
	}
	.my_aMain{
		margin: 0 auto;
		width: 95%;
		
	}
	h2{
		margin-top: 5px; 
	}
	.my_font{
		font-size: 12px;
		color:#505050;
		margin-top: 10px; 
	}
	article p:nth-child(1){
		margin-top: 30px 
	}
	article{
		margin-bottom: 65px; 
		line-height: 1.6
	}
</style>