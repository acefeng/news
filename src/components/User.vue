<template>
	<div>
		<mt-header fiexd="true">
		  <router-link to="/home" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<form action="" class="my_form">
			<img src="../assets/logo.png" height="100" width="100" alt="" class="my_img1">
			<mt-field label="用户名" placeholder="请输入用户名" v-model="username" class="my_text"></mt-field>
			<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
			<mt-button type="primary" size="large" @click="handleClick" class="my_button">登录</mt-button>
		</form>
	</div>
</template>
<script>
	export default {
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			handleClick(){
				this.$http.post(('/api/login/'),{params:{
					username:this.username,
					password:this.password
				}}).then((response) => {
					console.log(response.data);
					if(response.data.type=="good"){
        				this.$store.dispatch('changeuser_entry',response.data.name);
        				this.$router.push('/home');
					}else{
        				this.$store.dispatch('changeuser_user');
					}
				}).catch((err) => {
					console.log(err);
				})
			}
		}
	}
</script>
<style scoped>
.my_img1{
	display: block;
	margin: 0 auto;
	margin-top: 20%;
	border-radius:50%;
}
.my_form{
	width: 70%;
	margin: 0 auto;
}
.my_text{
	margin-top: 20px;
}
.my_button{
	margin-top: 20px;
}
</style>