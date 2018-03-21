import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {   //定义改变的数据
	my_footShow:true,
	user:'/user',
	username:''
}

const mutations = {  //处理数据的变化
	hideFooter(state){
		state.my_footShow=false;
	},
	showFooter(state){
		state.my_footShow=true;
	},
	changeuser_user(state,name){
		state.user='/user';
		state.username=name;
	},
	changeuser_entry(state,name){
		state.user='/entry';
		state.username=name;
	}
}

const actions = { //处理做的事情异步请求 判断 流程控制
	hideFooter:({commit})=>{
		commit('hideFooter');
	},
	showFooter:({commit})=>{
		commit('showFooter');
	},
	changeuser_user:({commit})=>{
		commit('changeuser_user');
	},
	changeuser_entry:({commit},name)=>{
		commit('changeuser_entry',name);
	}
}

const getters = {
	my_footShow(state){
		return state.my_footShow;
	},
	user(state){
		return state.user;
	},
	username(state){
		return state.username;
	}
}

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
