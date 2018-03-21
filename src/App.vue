<template>
  <div id="app">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="home" class="animated">
        <transition :duration="{ enter: 800, leave: 0 }" name="bounce"
        enter-active-class="fadeInRight" leave-active-class="fadeOutLeft">
          <router-view class="animated"></router-view>
        </transition>
      </mt-tab-container-item>
  
      <mt-tab-container-item id="user">
      </mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="selected" class="my_Fiexdfoot" v-show="my_footShow">
      <router-link to="/home" class="mint-tab-item" id="home">
        <img src="./assets/logo.png" class="my_himg">
        <div class="mint-tab-item-label my_sfon">主页</div>
      </router-link>
      <router-link :to="user" class="mint-tab-item" id="user" @click.native="checkLogin">
        <img src="./assets/logo.png" class="my_himg">
        <div class="mint-tab-item-label my_sfon">用户</div>
      </router-link>
    </mt-tabbar>
    
  </div>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  data(){
    return{
      selected:'home'
    }
  },
  computed:mapGetters([
    "my_footShow","user"
  ]),
  methods:{
    checkLogin(){
      this.$http.get(('/api/login')).then((response) => {
          console.log(response);
        }).catch((err) => {
          console.log(err);
        })
    }
  },
  watch:{
    $route(to,from){
      // console.log(to,from);
      //console.log(this.$store);
      var str = /^\/artical/;
      var str_admin = /^\/admin/;
      if(to.path == '/user' || to.path.match(str) != null || to.path.match(str_admin) != null){
        this.$store.dispatch('hideFooter');
      }else{
        this.$store.dispatch('showFooter');
      }
    }
  },
  created(){
    var str = /^\/artical/;
    var str_admin = /^\/admin/;
    if(this.$route.path == '/user' || this.$route.path.match(str) != null || this.$route.path.match(str_admin) != null){
      this.$store.dispatch('hideFooter');
    }else{
      this.$store.dispatch('showFooter');
    };

    //网页刷新查看是否已经登录
    this.$http.get(('/api/login/')).then((response) => {
      if(response.data.type=="good"){
            this.$store.dispatch('changeuser_entry');
      }else{
            this.$store.dispatch('changeuser_user');
      }
    }).catch((err) => {
      console.log(err);
    })
  },
  components:{
    
  }
}
</script>

<style>
@import './assets/css/animate.min.css';
  *{
    padding: 0px;
    margin: 0px;
  }
  .my_himg{
    width: 30px
  }
  .my_sfon{
    color: gray
  }
  .my_Fiexdfoot{
    position: fixed;
    bottom: 0px
  }
  .is-selected .mint-tab-item-label{
    font-size: 14px
  }
  .mint-tab-item:active{
    background: #CFCFCF;
  }
</style>
