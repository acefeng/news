<template>
	<div>
		<mt-header fiexd="true">
		  <router-link to="/home" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<p>
			你好{{username}}!
		</p>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
	data(){
		return{
		}
	},
	computed:mapGetters([
    	"username"
  	]),
	methods:{
	}
}
</script>
<style scoped>

</style>