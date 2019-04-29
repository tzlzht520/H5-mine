<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
    return {
      code: this.$route.param.code,
      redirect_uri: encodeURI("http://wxsc.saselomo.com/about"),
      appid: "wx55da418f69963f69"
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    getCod(){
      if(this.code){
        alert("错误")
      }else {
        console.log(location)
        // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+ this.appid +"&redirect_uri="+ this.redirect_uri +"&type=code&scope=snsapi_base#wechat_redirect"
      }
    }
  },
  created() {
    this.getCod()
  },
}
</script>
