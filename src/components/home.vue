<template>
	<div>
		<mt-navbar v-model="home_sele" class="my_Fixedheader">
		  <mt-tab-item id="1">热点新闻</mt-tab-item>
		  <mt-tab-item id="2">新时代</mt-tab-item>
		  <mt-tab-item id="3">体育新闻</mt-tab-item>
		</mt-navbar>
		<!-- tab-container -->
		<mt-tab-container v-model="home_sele">
		  <mt-tab-container-item id="1">
		  	<Local></Local>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		    <Modern></Modern>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <Sport></Sport>
		  </mt-tab-container-item>
		</mt-tab-container>
	</div>
</template>
<script>
import Local from './Local.vue'
import Modern from './Modern.vue'
import Sport from './Sport.vue'
export default {
	data(){
		return{
			home_sele:'1'
		}
	},
	components:{
		Local,
		Modern,
		Sport
	}	
}
</script>
<style>
*{
	margin: 0px;
	padding: 0px;
	font-family: 'STHeiti', 'Microsoft YaHei', 'Helvetica', 'Arial', sans-serif;
}
.mint-tab-container{
	margin-bottom: 28px;
}
.mint-tab-item{
	background: #EBEBEB;
	opacity: 0.8
}
.my_main{
	height: 100px;
	box-sizing: border-box;
	padding: 22px 0;
	margin: 0px 15px;
	border-bottom: 1px solid rgba(0,0,0,0.1);
}
.my_main p span{
	font-size: 0.1em;
	color: #999;
}
.my_main p span:nth-child(1){
	color: red;
	border: 1px solid red;
}
.my_main p:nth-child(2){
	margin-top:10px ;
}
.my_ul li{
	list-style: none;
}
.my_ul{
	margin-top:50px 
}
.my_Fixedheader{
	position: fixed;
	top: 0px;
	left: 0px;
	right: 0px;
	z-index: 1;
}
</style>